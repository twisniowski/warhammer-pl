Hooks.once("setup", async function () {

const WFRP4E = {}

CONFIG.JournalEntry.noteIcons = {
    "Marker": "systems/wfrp4e/icons/buildings/point_of_interest.png",
    "Wioska 1": "systems/wfrp4e/icons/buildings/village1.png",
    "Wioska 2": "systems/wfrp4e/icons/buildings/village2.png",
    "Wioska 3": "systems/wfrp4e/icons/buildings/village3.png",
    "Imperialne Koszary": "systems/wfrp4e/icons/buildings/empire_barracks.png",
    "Nawiedzony Las": "systems/wfrp4e/icons/buildings/haunted_wood.png",
    "Aptekarz": "systems/wfrp4e/icons/buildings/apothecary.png",
    "Droga": "systems/wfrp4e/icons/buildings/roads.png",
    "Obóz Orków": "systems/wfrp4e/icons/buildings/orc_city.png",
    "Cmentarz": "systems/wfrp4e/icons/buildings/cemetery.png",
    "Krasnoludzkie Piwo": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
    "Bretońskie Miasto 1": "systems/wfrp4e/icons/buildings/bret_city1.png",
    "Bretońskie Miasto 2": "systems/wfrp4e/icons/buildings/bret_city2.png",
    "Bretońskie Miasto 3": "systems/wfrp4e/icons/buildings/bret_city3.png",
    "Imperialne Miasto 1": "systems/wfrp4e/icons/buildings/empire_city1.png",
    "Imperialne Miasto 2": "systems/wfrp4e/icons/buildings/empire_city2.png",
    "Imperialne Miasto 3": "systems/wfrp4e/icons/buildings/empire_city3.png",
    "Kislevickie Miasto 1": "systems/wfrp4e/icons/buildings/kislev_city1.png",
    "Kislevickie Miasto 2": "systems/wfrp4e/icons/buildings/kislev_city2.png",
    "Kislevickie Miasto 3": "systems/wfrp4e/icons/buildings/kislev_city3.png",
    "Wzgórze Zamkowe 1": "systems/wfrp4e/icons/buildings/castle_hill1.png",
    "Wzgórze Zamkowe 2": "systems/wfrp4e/icons/buildings/castle_hill2.png",
    "Wzgórze Zamkowe 3": "systems/wfrp4e/icons/buildings/castle_hill3.png",
    "Wzgórze z Wieżą": "systems/wfrp4e/icons/buildings/tower_hill.png",
    "Nawiedzone Wzgórze": "systems/wfrp4e/icons/buildings/haunted_hill.png",
    "Jedzenie": "systems/wfrp4e/icons/buildings/food.png",
    "Jedzenie 2": "systems/wfrp4e/icons/buildings/food2.png",
    "Dwór": "systems/wfrp4e/icons/buildings/court.png",
    "Jaskinia 1": "systems/wfrp4e/icons/buildings/cave1.png",
    "Jaskinia 2": "systems/wfrp4e/icons/buildings/cave2.png",
    "Jaskinia 3": "systems/wfrp4e/icons/buildings/cave3.png",
    "Miejsce Kultu Bretonii": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
    "Miejsce Kultu Chaosu": "systems/wfrp4e/icons/buildings/chaos_worship.png",
    "Menhiry": "systems/wfrp4e/icons/buildings/standing_stones.png",
    "Leśne Elfy 1": "systems/wfrp4e/icons/buildings/welves1.png",
    "Leśne Elfy 2": "systems/wfrp4e/icons/buildings/welves2.png",
    "Leśne Elfy 3": "systems/wfrp4e/icons/buildings/welves3.png",
    "Stajnia": "systems/wfrp4e/icons/buildings/stables.png",
    "Krasnoludzka Twierdza 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
    "Krasnoludzka Twierdza 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
    "Krasnoludzka Twierdza 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
    "Farma": "systems/wfrp4e/icons/buildings/farms.png",
    "Kowal": "systems/wfrp4e/icons/buildings/blacksmith.png",
    "Strażnica": "systems/wfrp4e/icons/buildings/guards.png",
    "Magia": "systems/wfrp4e/icons/buildings/magic.png",
    "Metal": "systems/wfrp4e/icons/buildings/metal.png",
    "Góra 1": "systems/wfrp4e/icons/buildings/mountains1.png",
    "Góra 2": "systems/wfrp4e/icons/buildings/mountains2.png",
    "Mury Zamkowe": "systems/wfrp4e/icons/buildings/castle_wall.png",
    "Orki": "systems/wfrp4e/icons/buildings/orcs.png",
    "Portal Chaosu": "systems/wfrp4e/icons/buildings/chaos_portal.png",
    "Zajazd 1": "systems/wfrp4e/icons/buildings/inn1.png",
    "Zajazd 2": "systems/wfrp4e/icons/buildings/inn2.png",
    "Bagno": "systems/wfrp4e/icons/buildings/swamp.png",
    "Zwoje": "systems/wfrp4e/icons/buildings/scroll.png",
    "Port": "systems/wfrp4e/icons/buildings/port.png",
    "Obóz Zwierzoludzi 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
    "Obóz Zwierzoludzi 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
    "Ruiny": "systems/wfrp4e/icons/buildings/ruins.png",
    "Tartak": "systems/wfrp4e/icons/buildings/lumber.png",
    "Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
    "Świątynia": "systems/wfrp4e/icons/buildings/temple.png",
    "Płótna": "systems/wfrp4e/icons/buildings/textile.png",
    "Wieża 1": "systems/wfrp4e/icons/buildings/tower1.png",
    "Wieża 2": "systems/wfrp4e/icons/buildings/tower2.png",
    "Wieża Czarownika": "systems/wfrp4e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png"
}

game.wfrp4e.config.symptomEffects = {
        "blight": {
            label: "Uwiąd",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        let difficulty = ""
                        if (this.effect.label.includes("Umiarkowany"))
                            difficulty = "easy"
                        else if (this.effect.label.includes("Ciężki"))
                            difficulty = "average"
                        else
                            difficulty = "veasy"

                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill("Odporność", {absolute: {difficulty}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test =>
                                    {
                                        if (test.result.outcome == "failure")
                                            args.actor.addCondition("dead")
                                    })
                                })
                        }`
                }
            }
        },
        "buboes": {
            label: "Dymienica",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item.key))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }
            `}
            }
        },
        "convulsions": {
            label: "Konwulsje",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        let modifier = 0
                        if (this.effect.label.includes("Umiarkowany"))
                            modifier = -20
                        else
                            modifier = -10

                        let applicableCharacteristics = ["ws", "bs", "s", "ag", "t", "dex"]
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier += modifier
                        else if (args.type == "characteristic")
                        {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier += modifier
                        }
                        else if (args.type == "skill")
                        {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier += modifier
                        }`
                }
            }
        },
        "fever": {
            label: "Gorączka",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `

                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]

                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }`,
                    "otherEffects": ["blight", "wounded"]
                }
            }
        },
        "flux": {
            label: "Biegunka",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "lingering": {
            label: "Nawroty",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "coughsAndSneezes": {
            label: "Kaszel i Katar",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "gangrene": {
            label: "Gangrena",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        if (args.type == "characteristic" && args.item == "fel")
                        {
                            if (args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                    }`
                }
            }
        },
        "malaise": {
            label: "Apatia",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prepareData",
                    "symptom": true,
                    "script": `
                    if (game.user.isUniqueGM)
                    {
                        let fatigued = args.actor.hasCondition("fatigued")
                        if (!fatigued)
                        {
                            args.actor.addCondition("fatigued")
                            ui.notifications.notify("Dodano zmęczenie dla \" + args.actor.name + \" którego nie można usunąć, aż nie miną objawy Apatii.")
                        }
                    }
                    `
                }
            }
        },
        "nausea": {
            label: "Nudności",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "rollTest",
                    "symptom": true,
                    "script": `
                    if (this.actor.owner && args.test.result.outcome == "failure")
                    {
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                        if (applicableCharacteristics.includes(args.test.characteristicKey))
                            this.actor.addCondition("stunned")

                    }
                    `
                }
            }
        },
        "pox": {
            label: "Wysypka",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `

                        if (args.type == "characteristic" && args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }`
                }
            }
        },
        "wounded": {
            label: "Uciążliwa Rana",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill("Odporność", {absolute: {difficulty : "average"}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test =>
                                    {
                                        if (test.result.outcome == "failure")
                                            fromUuid("Compendium.wfrp4e-core.diseases.kKccDTGzWzSXCBOb").then(disease => {
                                                args.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                            })
                                    })
                                })
                        }`
                }
            }
        }
    }

game.wfrp4e.config.effectTriggers = {
    "invoke" : "Wywołanie Ręczne",
    "oneTime" : "Jednorazowe",
    "dialogChoice" : "Wybór z Dialogu",
    "prefillDialog" : "Wypełniony Dialog",
    "prePrepareData" : "Przygotowane wcześniej Dane",
    "prePrepareItems" : "Przygotowany wcześniej Przedmiot Aktora",
    "prepareData" : "Przygotuj Dane",
    "preWoundCalc" : "Prekalkulacja Ran",
    "woundCalc" : "Liczenie Ran",
    "preApplyDamage" : "Aplikuj wstępnie Obrażenia",
    "applyDamage" : "Aplikuj Obrażenia",
    "preTakeDamage" : "Otrzymuj wstępnie Obrażenia",
    "takeDamage" : "Otrzymuj Obrażenia",
    "preApplyCondition" : "Aplikuj wstępnie Stan",
    "applyCondition" : "Aplikuj Stan",
    "prePrepareItem" : "Przygotuj wstępnie Przedmiot",
    "prepareItem" : "Przygotuj Przedmiot",
    "preRollTest" : "Rzut wstępny przed Testem",
    "preRollWeaponTest" : "Rzut wstępny przed Testem Broni",
    "preRollCastTest" : "Rzut wstępny przed Testem Rzucenia Zaklęcia",
    "preChannellingTest" : "Rzut wstępny przed Testem Splątania",
    "preRollPrayerTest" : "Rzut wstępny przed Testem Modlitwy",
    "preRollTraitTest" : "Rzut wstępny przed Testem Cechy",
    "rollTest" : "Rzut na Test",
    "rollIncomeTest" : "Rzut na Test Zarabiania",
    "rollWeaponTest" : "Rzut na Test Broni",
    "rollCastTest" : "Rzut na Test Rzucania Zaklęcia",
    "rollChannellingTest" : "Rzut na Test Splątania",
    "rollPrayerTest" : "Rzut na Test Modlitwy",
    "rollTraitTest" : "Rzut na Test Cechy",
    "preOpposedAttacker" : "Wstępne Przeciwstawienie Atakującego",
    "preOpposedDefender" : "Wstępne Przeciwstawienie Broniącego",
    "opposedAttacker" : "Przeciwstawienie Atakującego",
    "opposedDefender" : "Przeciwstawienie Broniącego",
    "calculateOpposedDamage" : "Przelicz Obrażenia Przeciwstawne",
    "targetPrefillDialog" : "Wstępnie wypełniony Dialog Celu",
    "getInitiativeFormula" : "Przejmij Inicjatywę",
    "endTurn" : "Koniec Tury",
    "endRound" : "Koniec Rundy",
    "endCombat" : "Koniec Walki"
}

game.wfrp4e.config.effectPlaceholder = {

    "invoke" :
    `Ten efekt działa tylko po naciśnięciu przycisku Wywołaj.
    args:

    brak`,
    "oneTime" :
    `Ten efekt występuje raz, natychmiast po zastosowaniu.
    args:

    actor : aktor właściwy dla efektu
    `,
    "prefillDialog" :
    `Ten efekt jest stosowany przed pokazaniem okna dialogowego rzutu i powinien zmienić wartości wstępnie wypełnione w sekcji bonusowej.
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: używany przedmiot wymienionego typu
    options: inne szczegóły dotyczące testu (na przykład options.rest lub options.mutate)

    Example:
    if (args.type == "skill" && args.item.name == "Atletismo") args.prefillModifiers.modifier += 10`,

    "prePrepareData" :
    `Ten efekt jest stosowany przed obliczeniem jakichkolwiek danych aktora.
    args:

    actor : aktor właściwy dla efektu
    `,

    "prePrepareItems" :
    `Ten efekt jest stosowany przed sortowaniem i obliczaniem obiektów

    actor : aktor właściwy dla efektu
    `,

    "prepareData" :
    `Efekt ten jest stosowany po obliczeniu i przetworzeniu danych aktora.

    args:

    actor : aktor właściwy dla efektu
    `,

    "preWoundCalc" :
    `Ten efekt jest nakładany tuż przed obliczeniem Ran, idealny do zmiany atrybutów lub dodawania mnożników.

    actor : aktor właściwy dla efektu
    sb : Bonus z Siły
    tb : bonus z Wytrzymałości
    wpb : Bonus z Siły Woli
    multiplier : {
        sb : Mnożnik z BS
        tb : Mnożnik z BWt
        wpb : Mnożnik z BSW
    }

    e.g. para Hardy: "args.multiplier.tb += 1"
    `,

    "woundCalc" :
    `Ten efekt występuje po obliczeniu ran, idealny do pomnożenia wyniku.

    args:

    actor : aktor właściwy dla efektu
    wounds : obliczone rany

    e.g. for Swarm: "wounds *= 5"
    `,

    "preApplyDamage" :
    `Ten efekt występuje przed nałożeniem obrażeń na test przeciwstawny.
    args:

    actor : aktor który otrzymuje obrażenia
    attacker : aktor atakujący
    opposedTest : obiekt zawierający dane testu przeciwstawnego
    damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
    `,
    "applyDamage" :
    `Ten efekt występuje po obliczeniu obrażeń w przeciwstawnym teście, ale przed aktualizacją danych aktora.

    args:

    actor : aktor który otrzymuje obrażenia
    attacker : aktor atakujący
    opposedTest : obiekt zawierający dane testu przeciwstawnego
    damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
    totalWoundLoss : Utracone rany po mitygacji
    AP : dane użytych PP
    updateMsg : sekwencja początkowa dla komunikatu o aktualizacji obrażeń
    messageElements : wyświetlanie sekwencji użytych do pokazania, w jaki sposób obliczono mitygację obrażeń
    `,

    "preTakeDamage" :
    `Ten efekt ma miejsce przed otrzymaniem obrażeń w przeciwstawnym teście.

    args:

    actor : aktor który otrzymuje obrażenia
    attacker : aktor atakujący
    opposedTest : obiekt zawierający dane testu przeciwstawnego
    damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
    `,

    "takeDamage" :
    `Ten efekt występuje po obliczeniu obrażeń w przeciwstawnym teście, ale przed aktualizacją danych aktora.

    args:

    actor : aktor który otrzymuje obrażenia
    attacker : aktor atakujący
    opposedTest : obiekt zawierający dane testu przeciwstawnego
    damageType : ybrany typ obrażeń (ignorujący BWt, PP, etc.)
    totalWoundLoss : Utracone rany po mitygacji
    AP : dane użytych PP
    updateMsg : sekwencja początkowa dla komunikatu o aktualizacji obrażeń
    messageElements : wyświetlanie sekwencji użytych do pokazania, w jaki sposób obliczono mitygację obrażeń
    `,

    "preApplyCondition" :
    `Ten efekt występuje przed zastosowaniem efektów stanu.

    args:

    effect : stosowany stan
    data : {
        msg : Wiadomość na Chacie o zastosowaniu stanu
        <inne dane, np. specyficzne dla stanu>
    }
    `,

    "applyCondition" :
    `Ten efekt występuje po zastosowaniu efektów stanu.

    args:

    effect : stosowany stan
    data : {
        msg : Wiadomość na Chacie o zastosowaniu stanu
        <inne dane, np. specyficzne dla stanu>
    }
    `,
    "prePrepareItem" :
    `Ten efekt jest stosowany przed przetwarzaniem obiektu z danymi aktora.

    args:

    item : obiekt do przetwarzania
    `,
    "prepareItem" :
    `Ten efekt jest stosowany po przetworzeniu obiektu z danymi aktora.

    args:

    item : obiekt przetworzony
    `,
    "preRollTest":
    `Ten efekt jest stosowany przed obliczeniem Testu.

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,
    "preRollWeaponTest" :
    `Ten efekt jest nakładany przed obliczeniem testu broni.

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "preRollCastTest" :
    `Ten efekt jest nakładany przed obliczeniem testu rzucenia zaklęcia

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "preChannellingTest" :
    `Ten efekt jest nakładany przed obliczeniem testu splątywania

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "preRollPrayerTest" :
    `Ten efekt jest nakładany przed obliczeniem testu modlitwy.

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "preRollTraitTest" :
    `Ten efekt jest nakładany przed obliczeniem testu cechy.

    args:

    testData: Wszystkie dane niezbędne do wyliczenia wyniku
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollTest" :
    `Ten efekt jest stosowany po obliczeniu rzutu.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,
    "rollIncomeTest" :
    `Efekt ten jest stosowany po obliczeniu testu zarabiania.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollWeaponTest" :
    `Efekt ten jest stosowany po obliczeniu testu broni.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollCastTest" :
    `Efekt ten jest stosowany po obliczeniu testu rzucania zaklęcia.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollChannellingTest" :
    `Efekt ten jest stosowany po obliczeniu testu splątywania.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollPrayerTest" :
    `Efekt ten jest stosowany po obliczeniu testu modlitwy.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "rollTraitTest" :
    `Efekt ten jest stosowany po obliczeniu testu cechy.

    args:

    test: obiekt zawierający informacje o rzucie i wynik
    cardOptions: Dane do widoku, tytułu, szablonu itp. karty
    `,

    "preOpposedAttacker" :
    `Ten efekt jest stosowany przed rozpoczęciem obliczania wyniku testu przeciwstawnego dla atakującego.

    args:

    attackerTest: obiekt testu atakującego
    defenderTest: obiekt testu broniącego
    opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
    `,
    "preOpposedDefender" :
    `Ten efekt jest stosowany przed rozpoczęciem obliczania wyniku testu przeciwstawnego dla broniącego.

    args:

    attackerTest: obiekt testu atakującego
    defenderTest: obiekt testu broniącego
    opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
    `,

    "opposedAttacker" :
    `Ten efekt jest stosowany po rozpoczęciu testu przeciwstawnego dla atakującego.

    args:

    attackerTest: obiekt testu atakującego
    defenderTest: obiekt testu broniącego
    opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
    `,

    "opposedDefender" :
    `Ten efekt jest stosowany po rozpoczęciu testu przeciwstawnego dla broniącego.

    args:

    attackerTest: obiekt testu atakującego
    defenderTest: obiekt testu broniącego
    opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
    `,

    "calculateOpposedDamage" :
    `Ten efekt jest stosowany podczas obliczania obrażeń testu przeciwstawnego, dla atakującego

    args:

    damage : początkowe obrażenia przed mnożnikami
    damageMultiplier : mnożniki obliczone na podstawie różnicy rozmiarów
    sizeDiff : liczbowa różnica w rozmiarze, użyta do dodatkowych obrażeń
    opposedTest : obiekt testu przeciwstawnego
    `,

    "getInitiativeFormula" :
    `Efekt ten realizowany jest podczas określenia inicjatywy aktora

    args:

    initiative: Obliczona wartość inicjatywy
    `,

    "targetPrefillDialog" :
    `Ten efekt jest stosowany do innego aktora, gdy ten aktor jest celem i należy mu zmienić wartości wstępnie wypełnione w sekcji bonusów
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: obiekt wspomnianego użytego typu
    options: inne szczegóły dotyczące testu (na przykład options.rest lub options.mutate)

    Example:
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "endTurn" :
    `Ten efekt jest wykonywany na koniec tury aktora.

    args:

    combat: obecna walka
    `,

    "endRound" :
    `Ten efekt jest wykonywany na koniec rundy.

    args:

    combat: obecna walka
    `,
    "endCombat" :
    `Ten efekt jest wykonywany na koniec walki.

    args:

    combat: obecna walka
    `,

    "this" :
    `

    Wszystkie efekty mają dostęp do:
        this.actor : aktor wykonujący efekt
        this.effect : wykonywany efekt
        this.item : obiekt, który wywołuje efekt, jeśli efekt pochodzi od obiektu`

}

game.wfrp4e.config.speciesSkills = {
        "human": [
                    "Opieka nad Zwierzętami",
                    "Charyzma",
                    "Opanowanie",
                    "Wycena",
                    "Plotkowanie",
                    "Targowanie",
                    "Język (Bretoński)",
                    "Język (Jałowej Krainy)",
                    "Dowodzenie",
                    "Wiedza (Reikland)",
                    "Broń Biała (Podstawowa)",
                    "Broń Zasięgowa (Łuk)"
        ],
        "dwarf": [
            "Mocna Głowa",
            "Opanowanie",
            "Odporność",
            "Występy (Gawędziarstwo)",
            "Wycena",
            "Zastraszanie",
            "Język (Khazalid)",
            "Wiedza (Krasnoludy)",
            "Wiedza (Geología)",
            "Wiedza (Metalurgia)",
            "Broń Biała (Podstawowa)",
            "Rzemiosło (Dowolne)"
        ],
        "halfling": [
            "Charyzma",
            "Mocna Głowa",
            "Unik",
            "Hazard",
            "Targowanie",
            "Intuicja",
            "Język (Krainy Zgromadzenia)",
            "Wiedza (Reikland)",
            "Percepcja",
            "Zwinne Palce",
            "Skradanie (Wieś)",
            "Rzemiosło (Gotowanie)"
        ],
        "helf": [
            "Opanowanie",
            "Występy (Śpiewanie)",
            "Wycena",
            "Język (Eltharin)",
            "Dowodzenie",
            "Broń Biała (Podstawowa)",
            "Żeglarstwo",
            "Percepcja",
            "Muzyka (Dowolny instrument)",
            "Broń Zasięgowa (Łuk)",
            "Nawigacja",
            "Pływanie"
        ],
        "welf": [
            "Atletyka",
            "Wspinaczka",
            "Odporność",
            "Występy (Śpiewanie)",
            "Zastraszanie",
            "Język (Eltharin)",
            "Broń Biała (Podstawowa)",
            "Sztuka Przetrwania",
            "Percepcja",
            "Broń Zasięgowa (Łuk)",
            "Skradanie (Wieś)",
            "Tropienie"
        ],
    }

game.wfrp4e.config.speciesTalents = {
        "human": [
            "Wróżba Losu",
            "Błyskotliwość, Charyzmatyczny",
            3
        ],
        "dwarf": [
            "Odporność na Magię",
            "Widzenie w Ciemności",
            "Czytanie/Pisanie, Nieustępliwy",
            "Odporność Psychiczna, Nieugięty",
            "Tragarz",
            0
        ],
        "halfling": [
            "Wyczulony Zmysł (smak)",
            "Widzenie w Ciemności",
            "Odporność na Chaos",
            "Mały",
            2
        ],
        "helf": [
            "Wyczulony Zmysł (Wzrok)",
            "Zimna Krew, Błyskotliwość",
            "Widzenie w Ciemności",
            "Percepcja Magiczna, Szósty Zmysł",
            "Czytanie/Pisanie",
            0
        ],
        "welf": [
            "Wyczulony Zmysł (Wzrok)",
            "Twardziel, Percepcja Magiczna",
            "Widzenie w Ciemności",
            "Czytanie/Pisanie, Niezwykle Odporny",
            "Włóczykij",
            0
        ]
    }

game.wfrp4e.config.subspecies = {
        human: {
            reiklander: {
                name: "Reiklander",
                skills: [
                    "Opieka nad Zwierzętami",
                    "Charyzma",
                    "Opanowanie",
                    "Wycena",
                    "Plotkowanie",
                    "Targowanie",
                    "Język (Bretoński)",
                    "Język (Jałowej Krainy)",
                    "Dowodzenie",
                    "Wiedza (Reikland)",
                    "Broń Biała (Podstawowa)",
                    "Broń Zasięgowa (Łuk)"
                ],
                talents: [
                    "Wróżba Losu",
		    "Błyskotliwość, Charyzmatyczny",
                    3
                ]
            }
        }
    }

game.wfrp4e.config.loreEffects = {
        "beasts": {
            label: "Tradycja Zwierząt",
            icon: "modules/wfrp4e-core/icons/spells/beasts.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": `
                    let value = 1
                    let name = this.actor.data.token.name

                    if (game.user.isGM) {
                        game.user.targets.forEach(t => {
                            t.actor.applyFear(value, name)
                        })
                        game.user.updateTokenTargets([]);
                    }
                    else {
                        game.wfrp4e.utility.postFear(value, name)
                    }
                `
                }
            }
        },
        "death": {
            label: "Tradycja Śmierci",
            icon: "modules/wfrp4e-core/icons/spells/death.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("fatigued")
                    }`
                }
            }
        },
        "fire": {
            label: "Tradycja Ognia",
            icon: "modules/wfrp4e-core/icons/spells/fire.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("ablaze")
                    }`
                }
            }
        },
        "heavens": {
            label: "Tradycja Niebios",
            icon: "modules/wfrp4e-core/icons/spells/heavens.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }

                if (applyAP) {

                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;

                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                    `
                }
            }
        },
        "metal": {
            label: "Tradycja Metalu",
            icon: "modules/wfrp4e-core/icons/spells/metal.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }


                if (metalValue)
                    args.messageElements.push("-" + metalValue + " Zbroja Metalowa")
                args.totalWoundLoss += metalValue

                if (applyAP) {

                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;

                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                `
                }
            }
        },
        "life": {
            label: "Tradycja Życia",
            icon: "modules/wfrp4e-core/icons/spells/life.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    fromUuid(this.effect.origin).then(caster => {
                        if (this.actor.owner)
                        {
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                let bleeding = this.actor.hasCondition("bleeding")
                                let fatigued = this.actor.hasCondition("fatigued")
                                if (bleeding) this.actor.removeCondition("bleeding", bleeding.flags.wfrp4e.value)
                                if (fatigued) this.actor.removeCondition("fatigued", fatigued.flags.wfrp4e.value)
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead")))
                                this.actor.applyBasicDamage(caster.data.data.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                        }
                    })`
                }
            }
        },
        "light": {
            label: "Tradycja Światła",
            icon: "modules/wfrp4e-core/icons/spells/light.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                fromUuid(this.effect.origin).then(caster => {
                    if (this.actor.owner)
                    {
                        let bleeding = this.actor.addCondition("blinded")
                        if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            this.actor.applyBasicDamage(caster.data.data.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                    }
                })`
                }
            }
        },
        "shadow": {
            label: "Tradycja Cieni",
            icon: "modules/wfrp4e-core/icons/spells/shadow.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                if (applyAP) {
                   let AP = args.AP

                   args.totalWoundLoss += AP.used
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = "0/" + AP.value + " " + game.i18n.localize("AP")
                }`
                }
            }
        },
        "hedgecraft": {
            label: "Tradycja Guślarstwa",
            icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": ``
                }
            }
        },
        "witchcraft": {
            label: "Tradycja Czarownictwa",
            icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("bleeding")
                    }`
                }
            }
        }
    }

});