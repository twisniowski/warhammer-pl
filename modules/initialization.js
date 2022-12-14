Hooks.on("setup", () => {
    game.settings.register("wfrp4e-core", "initialized", {
        name: "Initialization",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    });

    game.settings.registerMenu("wfrp4e-core", "init-dialog", {
        name: "WFRP4e Content Setup",
        label: "Setup",
        hint: "Import or update the content from the WFRP4e Core Module",
        type: WFRP4eCoreInitWrapper,
        restricted: true
    })
})

Hooks.on("renderCompendiumDirectory", async () => {
    if (game.packs.get("wfrp4e-core.trappings")) {
        game.packs.delete("wfrp4e.basic")
        await ui.sidebar.render(true)
        ui.sidebar.element.find("[data-pack='wfrp4e.basic']").remove()
    }
})

class WFRP4eCoreInitWrapper extends FormApplication {
    render() {
        new WFRP4eContentInitialization().render(true);
    }
}

class WFRP4eContentInitialization extends Dialog {
    constructor() {
        super({
            title: "Inicjalizacja zawartości WFRP4e",
            content:
                `<img src="/modules/wfrp4e-core/art/ui/logo.webp" style="margin-right: auto;margin-left: auto;width: 40%;display: block;"/>
            <p class="notes">Zainicjalizować moduł zawartości WFRP4e?<br><br>Zaimportuje lub zaktualizuje to wszystkie dzienniki i sceny w twoim świecie, posortuje w folderach i umieści notatki na mapach</p>
            <ul>
            <li>131 wpisy do dzienników (Tło i Zasady)</li>
            <li>19 foldery, porządkujące poprzednie wpisy</li>
            <li>3 Sceny - w tym mapa Reiklandu z adnotacjami</li>
            </ul>
            <p class="notes">
            Warhammer Fantasy Roleplay 4th Edition Core Module.<br><br>

            No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>

            Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2020. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>

            <img src="modules/wfrp4e-core/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-core/warhammer.png" height=50 width=50/>
            <br>
            Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
            Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
            Special thanks to: <b>Games Workshop, Fatshark</b><br><br>

            <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`,
            module: game.modules.get("wfrp4e-core"),
            buttons: {
                initialize: {
                    label: "Inicjalizuj",
                    callback: async () => {
                        game.settings.set("wfrp4e-core", "initialized", true)
                        await new WFRP4eContentInitialization().initialize()
                        ui.notifications.notify("Inicjalizacja Zakończona")
                    }
                },
                update: {
                    label: "Aktualizuj",
                    callback: async () => {
                        let updater = await game.wfrp4e.apps.ModuleUpdater.create(game.modules.get("wfrp4e-core"), this)
                        updater.render(true)
                    }
                },
                no: {
                    label: "Nie",
                    callback: () => {
                        game.settings.set("wfrp4e-core", "initialized", true)
                        ui.notifications.notify("Pominięto inicjalizację.")
                    }
                }
            }
        })

        this.folders = {
            "Scene": {},
            "Item": {},
            "Actor": {},
            "JournalEntry": {},
	    "RollTable" : {}
        }

        this.journals = {};
        this.actors = {};
        this.scenes = {};
	this.tables = {};
        this.moduleKey = "wfrp4e-core"
	this.scenePacks = []
    }

    async initialize() {
        return new Promise((resolve) => {
            fetch(`modules/warhammer-pl/modules/initialization.json`).then(async r => r.json()).then(async json => {
                let createdFolders = await Folder.create(json)
                for (let folder of createdFolders)
                    this.folders[folder.data.type][folder.data.name] = folder;

                for (let folderType in this.folders) {
                    for (let folder in this.folders[folderType]) {

                        let parent = this.folders[folderType][folder].getFlag(this.moduleKey, "initialization-parent")
                        if (parent) {
                            let parentId = this.folders[folderType][parent].id
                            await this.folders[folderType][folder].update({ parent: parentId })
                        }
                    }
                }

                await this.initializeEntities()
                await this.initializeScenes()
                resolve()
            })
        })
    }

    async initializeEntities() {

        let packList = this.data.module.data.flags.initializationPacks

        for (let pack of packList) {
                        if (game.packs.get(pack).metadata.entity == "Scene")
            {
                this.scenePacks.push(pack)
                continue
            }
            let documents = await game.packs.get(pack).getDocuments();
            for (let document of documents) {
                let folder = document.getFlag(this.moduleKey, "initialization-folder")
                if (folder)
                    document.data.update({ "folder": this.folders[document.documentName][folder].id })
                if (document.data.flags[this.moduleKey].sort)
                    document.data.update({ "sort": document.data.flags[this.moduleKey].sort })
            }
            switch (documents[0].documentName) {
                case "Actor":
                    ui.notifications.notify(this.data.module.data.title + ": Inicjalizacja Aktorów")
                    let existingDocuments = documents.filter(i => game.actors.has(i.id))
                    let newDocuments = documents.filter(i => !game.actors.has(i.id))
                    let createdActors = await Actor.create(newDocuments.map(c => c.data))
                    for (let actor of createdActors)
                        this.actors[actor.data.name] = actor
                    for (let doc of existingDocuments)
                    {
                        let existing = game.actors.get(doc.id)
                        await existing.update(doc.toObject())
                        ui.notifications.notify(`Zaktualizowano istniejący dokument ${doc.name}`)
                    }
                    break;
                case "Item":
                    ui.notifications.notify(this.data.module.data.title + ": Inicjalizacja Obiektów")
                    await Item.create(documents.map(c => c.data))
                    break;
                case "JournalEntry":
                    ui.notifications.notify(this.data.module.data.title + ": Inicjalizacja Dzienników")
                    let createdEntries = await JournalEntry.create(documents.map(c => c.data))
                    for (let entry of createdEntries)
                        this.journals[entry.data.name] = entry
                    break;
		case "RollTable":
                    ui.notifications.notify(this.data.module.data.title + ": Inicjalizacja Tabel")
                    await RollTable.create(documents.map(c => c.data))
                    break;
            }
        }
    }

    async initializeScenes() {
        ui.notifications.notify(this.data.module.data.title + ": Inicjalizacja Scen")
        for (let pack of this.scenePacks)
        {
            let m = game.packs.get(pack)
            let maps = await m.getDocuments()
            for (let map of maps) {
                let folder = map.getFlag(this.moduleKey, "initialization-folder")
                if (folder)
                    map.data.update({ "folder": this.folders["Scene"][folder].id })
            }
            await Scene.create(maps.map(m => m.data)).then(sceneArray => {
                sceneArray.forEach(async s => {
                    let thumb = await s.createThumbnail();
                    s.update({ "thumb": thumb.thumb })
                })
            })
        }
    }
}


class WFRP4eContentInitializationSetup {

    static async setup() {
        WFRP4eContentInitializationSetup.displayFolders()
        WFRP4eContentInitializationSetup.setFolderFlags()
        WFRP4eContentInitializationSetup.setSceneNotes();
        WFRP4eContentInitializationSetup.setEmbeddedEntities()
    }

    static async displayFolders() {
        let array = [];
        game.folders.entities.forEach(async f => {
            if (f.data.parent)
                await f.setFlag("wfrp4e-core", "initialization-parent", game.folders.get(f.data.parent).data.name)
        })
        game.folders.entities.forEach(f => {
            array.push(f.data)
        })
        console.log(JSON.stringify(array))
    }

    static async setFolderFlags() {
        for (let actor of game.actors.entities)
            await actor.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(actor.data.folder).data.name, sort: actor.data.sort } })
        for (let item of game.items.entities)
            await item.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(item.data.folder).data.name, sort: item.data.sort } })
        for (let journal of game.journal.entities)
            await journal.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(journal.data.folder).data.name, sort: journal.data.sort } })
    }

    static async setSceneNotes() {
        for (let scene of game.scenes.entities)
            if (scene.data.journal)
                await scene.setFlag("wfrp4e-core", "scene-note", game.journal.get(scene.data.journal).data.name)
    }


    static async setEmbeddedEntities() {
        for (let scene of game.scenes.entities) {
            let notes = duplicate(scene.data.notes)
            for (let note of notes) {
                setProperty(note, "flags.wfrp4e-core.initialization-entryName", game.journal.get(note.entryId).data.name)
            }
            let tokens = duplicate(scene.data.tokens)
            for (let token of tokens) {
                setProperty(token, "flags.wfrp4e-core.initialization-actorName", game.actors.get(token.actorId).data.name)
            }
            await scene.update({ notes: notes, tokens: tokens })
        }
    }
}