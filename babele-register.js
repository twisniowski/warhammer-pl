Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'warhammer-pl',
            lang: 'pl',
            dir: 'compendium'
        });

Babele.get().registerConverters({

       "spells_duration_range_target": (value) => {  // Hechizos y Plegarias
        if ( value == "" ) return "";
        if ( value == "Touch" ) return "Dotyk";
        if ( value == "You" ) return "Ty";
        if ( value == "Instant" ) return "Natychmiastowy";
        if ( value == "Line of Sight" ) return "Zasięg Wzroku";
        if ( value == "Special" ) return "Specjalny";
	if ( value == "a single location" ) return "jedna lokacja";
	if ( value == "see description" ) return "patrz opis";
	if ( value == "Until sunrise" ) return "Do świtu";
	if ( value == "Until the next sunrise" ) return "Do kolejnego świtu";
        var translw = value;
        var re  = /(.*) Bonus (\w*)/i;
        var res = re.exec( value );
        var unit = "";
        var charac = "";
        var characbonus = "";
        if ( res ) { // Test "<charac> Bonus <unit>" pattern
          if ( res[1] ) { // We have charac name, then convert it
            translw = characbonus;
          }
          characbonus = res[1];
          unit = res[2];
        } else {
          re = /(\d+) (\w+)/i;
          res = re.exec( value );
          if (res) { // Test : "<number> <unit>" pattern
            translw  = res[1];
            unit = res[2];
          } else { // Test
            re = /(\w+) (\w+)/i;
            res = re.exec( value );
            if (res) { // Test : "<charac> <unit>" pattern
              translw = charac;
              charac  = res[1];
              unit = res[2];
            }
          }
        }
        if ( charac == "Weapon Skill") charac = "Walka Wręcz";
        if ( charac == "Ballistic Skill") charac = "Umiejętności Strzeleckie";
        if ( charac == "Strenght") charac = "Siła";
        if ( charac == "Toughness") charac = "Wytrzymałość";
        if ( charac == "Initiative") charac = "Inicjatywa";
        if ( charac == "Agility") charac = "Zwinność";
        if ( charac == "Dexterity") charac = "Zręczność";
        if ( charac == "Intelligence") charac = "Inteligencja";
        if ( charac == "Willpower") charac = "Siła Woli";
        if ( charac == "Fellowship") charac = "Ogłada";

        if ( characbonus == "Weapon Skill") charac = "Bonus z Walki Wręcz";
        if ( characbonus == "Ballistic Skill") charac = "Bonus z Umiejętności Strzeleckich";
        if ( characbonus == "Strenght") charac = "Bonus z Siły";
        if ( characbonus == "Toughness") charac = "Bonus z Wytrzymałości";
        if ( characbonus == "Initiative") charac = "Bonus z Inicjatywy";
        if ( characbonus == "Agility") charac = "Bonus ze Zwinności";
        if ( characbonus == "Dexterity") charac = "Bonus ze Zręczności";
        if ( characbonus == "Intelligence") charac = "Bonus z Inteligencji";
        if ( characbonus == "Willpower") charac = "Bonus z Siły Woli";
        if ( characbonus == "Fellowship") charac = "Bonus z Ogłady";

        if ( unit == "Round") unit = "Runda";
        if ( unit == "Rounds") unit = "Rundy";
        if ( unit == "round") unit = "runda";
        if ( unit == "rounds") unit = "rundy";
        if ( unit == "minute") unit = "minuta";
        if ( unit == "minutes") unit = "minuty";
        if ( unit == "Minute") unit = "Minuta";
        if ( unit == "Minutes") unit = "Minuty";
        if ( unit == "hour") unit = "godzina";
        if ( unit == "hours") unit = "godziny";
        if ( unit == "Hour") unit = "Godzina";
        if ( unit == "Hours") unit = "Godziny";
        if ( unit == "days") unit = "dni";
        if ( unit == "Days") unit = "Dni";
        if ( unit == "yard") unit = "metr";
        if ( unit == "yards") unit = "metry";
        if ( unit == "Yard") unit = "Metr";
        if ( unit == "Yards") unit = "Metry";
        if ( unit == "mile") unit = "kilometr";
        if ( unit == "miles") unit = "kilometry";
        if ( unit == "Mile") unit = "Kilometr";
        if ( unit == "Miles") unit = "Kilometry";
        if ( unit == "allies") unit = "sojusznicy";
        if ( unit == "Allies") unit = "Sojusznicy";
        if ( unit == "sailing") unit = "żeglowny";
        if ( unit == "Sailing") unit = "Żeglowny";
        translw += charac + " " + unit;
        return translw;
	},

       "spells_damage": (value) => {  // Daño de Hechizos y Plegarias
        if ( value == "Weapon Skill Bonus") return "Bonus z Walki Wręcz";
        if ( value == "Ballistic Skill Bonus") return "Bonus z Umiejętności Strzeleckich";
        if ( value == "Strenght Bonus") return "Bonus z Siły";
        if ( value == "Toughness Bonus") return "Bonus z Wytrzymałości";
        if ( value == "Initiative Bonus") return "Bonus z Inicjatywy";
        if ( value == "Agility Bonus") return "Bonus ze Zwinności";
        if ( value == "Dexterity Bonus") return "Bonus ze Zręczności";
        if ( value == "Intelligence Bonus") return "Bonus z Inteligencji";
        if ( value == "Willpower Bonus") return "Bonus z Siły Woli";
        if ( value == "Fellowship Bonus") return "Bonus z Ogłady";
	},

      "career_class": (value) => { // Klasy
        if ( value == "Academics" ) return "Uczeni";
        if ( value == "Academic" ) return "Uczony";
        if ( value == "Burghers" ) return "Mieszczanie";
        if ( value == "Burgher" ) return "Mieszczanin";
        if ( value == "Courtiers" ) return "Dworzanie";
        if ( value == "Courtier" ) return "Dworzanin";
        if ( value == "Peasants" ) return "Pospólstwo";
        if ( value == "Peasant" ) return "Pospólstwo";
        if ( value == "Rangers" ) return "Wędrowcy";
        if ( value == "Ranger" ) return "Wedrowiec";
        if ( value == "Riverfolk" ) return "Wodniacy";
        if ( value == "Rogues" ) return "Łotrzykowie";
        if ( value == "Rogue" ) return "Łotrzyk";
        if ( value == "Warriors" ) return "Wojownicy";
        if ( value == "Warrior" ) return "Wojownik";
	},

      "career_careergroup": (value) => { // Grupo de carrera
        if ( value == "Apothecary" ) return "Aptekarz";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Lawyer" ) return "Prawnik";
        if ( value == "Nun" ) return "Mniszka";
        if ( value == "Physician" ) return "Lekarz";
        if ( value == "Priest" ) return "Kapłan";
        if ( value == "Scholar" ) return "Uczony";
        if ( value == "Wizard" ) return "Czarodziej";
        if ( value == "Agitator" ) return "Agitator";
        if ( value == "Artisan" ) return "Rzemieślnik";
        if ( value == "Beggar" ) return "Żebrak";
        if ( value == "Investigator" ) return "Śledczy";
        if ( value == "Merchant" ) return "Kupiec";
        if ( value == "Rat Catcher" ) return "Szczurołap";
        if ( value == "Townsman" ) return "Mieszczanin";
        if ( value == "Watchman" ) return "Strażnik";
        if ( value == "Advisor" ) return "Doradca";
        if ( value == "Artist" ) return "Artysta";
        if ( value == "Duellist" ) return "Zwadźca";
        if ( value == "Envoy" ) return "Poseł";
        if ( value == "Servant" ) return "Służący";
        if ( value == "Spy" ) return "Szpieg";
        if ( value == "Warden" ) return "Namiestnik";
        if ( value == "Bailiff" ) return "Zarządca";
        if ( value == "Hedge Witch" ) return "Guślarz";
        if ( value == "Herbalist" ) return "Zielarz";
        if ( value == "Hunter" ) return "Łowca";
        if ( value == "Miner" ) return "Górnik";
        if ( value == "Mystic" ) return "Mistyk";
        if ( value == "Scout" ) return "Zwiadowca";
        if ( value == "Villager" ) return "Chłop";
        if ( value == "Bounty Hunter" ) return "Łowca Nagród";
        if ( value == "Coachman" ) return "Woźnica";
        if ( value == "Entertainer" ) return "Kuglarz";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Flagellant" ) return "Biczownik";
        if ( value == "Messenger" ) return "Posłaniec";
        if ( value == "Pedlar" ) return "Domokrążca";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Road warden" ) return "Strażnik Dróg";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Witch Hunter" ) return "Łowca Czarownic";
        if ( value == "Boatman" ) return "Przewoźnik";
        if ( value == "Huffer" ) return "Pilot Rzeczny";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Riverwarden" ) return "Strażnik Rzeczny";
        if ( value == "Riverwoman" ) return "Flisak";
        if ( value == "Seaman" ) return "Żeglarz";
        if ( value == "Smuggler" ) return "Przemytnik";
        if ( value == "Stevedore" ) return "Doker";
        if ( value == "Wrecker" ) return "Pirat Rzeczny";
        if ( value == "Bawd" ) return "Rajfur";
        if ( value == "Charlatan" ) return "Szarlatan";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Fence" ) return "Paser";
        if ( value == "Grave Robber" ) return "Hiena Cmentarna";
        if ( value == "Outlaw" ) return "Banita";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Racketeer" ) return "Reketer";
        if ( value == "Thief" ) return "Złodziej";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Witch" ) return "Bruja";
        if ( value == "Cavalryman" ) return "Kawalerzysta";
        if ( value == "Engineer" ) return "Inżynier";
        if ( value == "Guard" ) return "Ochroniarz";
        if ( value == "Knight" ) return "Rycerz";
        if ( value == "Pit Fighter" ) return "Gladiator";
        if ( value == "Protagonist" ) return "Oprych";
        if ( value == "Soldier" ) return "Żołnierz";
        if ( value == "Slayer" ) return "Zabójca";
        if ( value == "Warrior Priest" ) return "Kapłan-wojownik";
	},

	"talents_specification_label": (value) => {  // Especificación de talentos
             if ( value == "Specification" ) return "Specyfikacja";
	},

	"talents_specification": (value) => {  // Especificación de talentos, valor
	     if ( value == "Target" ) return "Cel";
	     if ( value == "Everything" ) return "Wszystko";
         if ( value == "Greenskins" ) return "Zielonoskórzy";
     	 if ( value == "Dwarfs" ) return "Krasnoludy";
	     if ( value == "Elves" ) return "Elfy";
	     if ( value == "Predators" ) return "Drapieżcy";
	     if ( value == "Living" ) return "Żywi";
	},

	"traits_specification_label": (value) => {  // Especificación de rasgos
             if ( value == "Specification" ) return "Specyfikacja";
	},

	"traits_specification": (value) => {  // Especificación de rasgos, valor
	     if ( value == "Any" ) return "Dowolny";
             if ( value == "Rating" ) return "Wartość";
             if ( value == "Target" ) return "Cel";
	     if ( value == "Damage" ) return "Obrażenia";
             if ( value == "Deity" ) return "Bóg";
             if ( value == "Diety" ) return "Bóg";
             if ( value == "Trained Skills" ) return "Habilidades Entrenadas";
             if ( value == "# (Type)" ) return "# (Typ)";
	     if ( value == "Target #" ) return "# Celów";
	     if ( value == "Type" ) return "Typ";
     	     if ( value == "Size" ) return "Wielkość";
     	     if ( value == "Tiny" ) return "Malutki";
     	     if ( value == "Little" ) return "Niewielki";
       	     if ( value == "Small" ) return "Mały";
     	     if ( value == "Average" ) return "Średni";
     	     if ( value == "Large" ) return "Duży";
     	     if ( value == "Enormous" ) return "Wielki";
	     if ( value == "Monstrous" ) return "Monstrualny";
             if ( value == "Corruption Strength" ) return "Siła Zepsucia";
	     if ( value == "Minor" ) return "Pomniejsza";
	     if ( value == "Moderate" ) return "Średnia";
	     if ( value == "Major" ) return "Duża";
             if ( value == "Difficulty" ) return "Trudność";
	     if ( value == "Very Easy" ) return "Bardzo Łatwy";
	     if ( value == "Easy" ) return "Łatwy";
	     if ( value == "Average" ) return "Przeciętny";
	     if ( value == "Challenging" ) return "Wymagający";
	     if ( value == "Difficult" ) return "Problematyczny";
	     if ( value == "Hard" ) return "Trudny";
	     if ( value == "Very Hard" ) return "Bardzo trudny";
             if ( value == "Lore" ) return "Wiedza";
	     if ( value == "Beasts" ) return "Zwierząt";
	     if ( value == "Death" ) return "Śmierci";
	     if ( value == "Fire" ) return "Ognia";
	     if ( value == "Heavens" ) return "Niebios";
	     if ( value == "Metal" ) return "Metalu";
	     if ( value == "Life" ) return "Życia";
	     if ( value == "Light" ) return "Światła";
	     if ( value == "Shadow" ) return "Cieni";
	     if ( value == "Hedgecraft" ) return "Guślarstwa";
	     if ( value == "Witchcraft" ) return "Czarownictwa";
	     if ( value == "Necromancy" ) return "Nekromancji";
	     if ( value == "Daemonology" ) return "Demonologii";
	     if ( value == "Chaos" ) return "Chaos";
	     if ( value == "Any Chaos" ) return "Dowolnego Chaosu";
	     if ( value == "Any Lore" ) return "Dowolna wiedza";
	     if ( value == "Poison" ) return "Trucizna";
     	     if ( value == "Venom" ) return "Jad";
	     if ( value == "Broken" ) return "Panika";
     	     if ( value == "Drive" ) return "Powożenie";
	     if ( value == "Entertain" ) return "Występy";
	     if ( value == "Fetch" ) return "Aport";
	     if ( value == "Guard" ) return "Strzeż";
     	     if ( value == "Home" ) return "Dom";
	     if ( value == "Magic" ) return "Magia";
	     if ( value == "Mount" ) return "Wierzchowiec";
	     if ( value == "War" ) return "Wojna";
	     if ( value == "Sigmarites" ) return "Sigmaryci";
	     if ( value == "Witch" ) return "Czarownica";
	     if ( value == "the Rich, Beastmen" ) return "Bogaci, Zwierzoludzie";
	     if ( value == "Bailiffs, Lawyers" ) return "Zarządcy, Prawnicy";
	     if ( value == "Itching Pox" ) return "Ospa Swędząca";
	     if ( value == "Packer's Pox" ) return "Ospa Zwierzęca";
	     if ( value == "Ratte Fever" ) return "Szczurza Gorączka";
	     if ( value == "The Black Plague" ) return "Czarna Zaraza";
	     if ( value == "Various" ) return "Róźne";
	     if ( value == "Choose one" ) return "Wybierz jeden";
	     if ( value == "Choose two" ) return "Wybierz dwa";
	     if ( value == "Everything" ) return "Wszystko";
	     if ( value == "Greenskins" ) return "Zielonoskórzy";
	     if ( value == "Dwarfs" ) return "Krasnoludy";
	     if ( value == "Elves" ) return "Elfy";
	     if ( value == "Thin People" ) return "Szczupłe Osoby";
	},

	"criticals_wounds": (value) => {  // Daño extra de críticos
             if ( value == "Death" ) return "Śmierć";
	},

	"criticals_location": (value) => {  // Localización de críticos
             if ( value == "Head" ) return "Głowa";
             if ( value == "Arm" ) return "Ramie";
	     if ( value == "Leg" ) return "Noga";
             if ( value == "Body" ) return "Korpus";
	},

	"trappings_penalty": (value) => {  // Penalizador de accesorios
             if ( value == "-10 Perception" ) return "-10 do Perepcji";
	     if ( value == "-20 Perception" ) return "-20 do Percepcji";
	     if ( value == "-10 Stealth" ) return "–10 do Skradania";
	},

	"trappings_range": (value) => {  // Alcance de armas a distancia
	     if ( value == "As weapon" ) return "jak Broń";
	     if ( value == "Half weapon" ) return "1/2 Broni";
	     if ( value == "Third weapon" ) return "1/3 Broni";
	     if ( value == "Quarter weapon" ) return "1/4 Broni";
	     if ( value == "Twice weapon" ) return "2x Broń";
	},

	"bestiary_ws": (value) => {  // Bestiario, HA
             if ( value == "Weapon Skill" ) return "Walka Wręcz";
	},
	"bestiary_wsabrev": (value) => {  // Bestiario, HA abreviatura
             if ( value == "WS" ) return "WW";
	},
	"bestiary_bs": (value) => {  // Bestiario, HP
	     if ( value == "Ballistic Skill" ) return "Umiejętności Strzeleckie";
	},
	"bestiary_bsabrev": (value) => {  // Bestiario, HP abreviatura
	     if ( value == "BS" ) return "US";
	},
	"bestiary_s": (value) => {  // Bestiario, F
             if ( value == "Strength" ) return "Siła";
	},
	"bestiary_sabrev": (value) => {  // Bestiario, F abreviatura
             if ( value == "S" ) return "S";
	},
	"bestiary_t": (value) => {  // Bestiario, R
	     if ( value == "Toughness" ) return "Wytrzymałość";
	},
	"bestiary_tabrev": (value) => {  // Bestiario, R abreviatura
	     if ( value == "T" ) return "Wt";
	},
	"bestiary_i": (value) => {  // Bestiario, Ini
             if ( value == "Initiative" ) return "Inicjatywa";
	},
	"bestiary_iabrev": (value) => {  // Bestiario, Ini abreviatura
             if ( value == "I" ) return "I";
	},
	"bestiary_ag": (value) => {  // Bestiario, Ag
	     if ( value == "Agility" ) return "Zwinność";
	},
	"bestiary_agabrev": (value) => {  // Bestiario, Ag
	     if ( value == "Ag" ) return "Zw";
	},
	"bestiary_dex": (value) => {  // Bestiario, Des
             if ( value == "Dexterity" ) return "Zręczność";
	},
	"bestiary_dexabrev": (value) => {  // Bestiario, Des abreviatura
             if ( value == "Dex" ) return "Zr";
	},
	"bestiary_int": (value) => {  // Bestiario, I
	     if ( value == "Intellegence" ) return "Inteligencja";
	},
	"bestiary_intabrev": (value) => {  // Bestiario, I abreviatura
	     if ( value == "Int" ) return "Int";
	},
	"bestiary_wp": (value) => {  // Bestiario, Vol
             if ( value == "Willpower" ) return "Siła Woli";
	},
	"bestiary_wpabrev": (value) => {  // Bestiario, Vol abreviatura
             if ( value == "WP" ) return "Wp";
	},
	"bestiary_fel": (value) => {  // Bestiario, Emp
	     if ( value == "Fellowship" ) return "Ogłada";
	},
	"bestiary_felabrev": (value) => {  // Bestiario, Emp abreviatura
	     if ( value == "Fel" ) return "Ogd";
	},

	"injuries_location": (value) => {  // Heridas, Localización
	     if ( value == "Head" ) return "Głowa";
	     if ( value == "Ear" ) return "Ucho";
	     if ( value == "Nose" ) return "Nos";
	     if ( value == "Eye" ) return "Oko";
	     if ( value == "Teeth" ) return "Zęby";
	     if ( value == "Tongue" ) return "Język";
	     if ( value == "Body" ) return "Korpus";
	     if ( value == "Arm" ) return "Ręka";
	     if ( value == "Hand" ) return "Dłoń";
	     if ( value == "Finger" ) return "Palec u ręki";
	     if ( value == "Leg" ) return "Noga";
	     if ( value == "Foot" ) return "Stopa";
	     if ( value == "Toes" ) return "Palec u stopy";
	},
	"injuries_duration": (value) => {  // Heridas, Duración
	     if ( value == "30 - TB" ) return "30 - BWt";
	     if ( value == "30 - TB days" ) return "30 - BWt dni";
	},

	"disease_units": (value) => {  // Enfermedades, Unidades
	     if ( value == "days" ) return "dni";
	     if ( value == "hours" ) return "godzin";
	     if ( value == "minutes" ) return "minut";
	},

	"diaries_folder": (value) => {  // Diarios y Tablas, Carpetas
	     if ( value == "Bestiary" ) return "Bestiariusz";
	     if ( value == "Between Adventures" ) return "Pomiędzy Przygodami";
	     if ( value == "Character" ) return "Postać";
	     if ( value == "Rules" ) return "Zasady";
	     if ( value == "Class Endeavours" ) return "Zajęcia Klasowe";
	     if ( value == "General Endeavours" ) return "Zajęcia Ogólne";
	     if ( value == "Endeavours" ) return "Zajęcia";
	     if ( value == "Combat" ) return "Walka";
	     if ( value == "GM's Guide" ) return "Przewodnik MG";
	     if ( value == "Magic" ) return "Magia";
	     if ( value == "Mountains, Foothills, and Vorbergland" ) return "Góry, Wzgórza i Vorbergland";
	     if ( value == "Moving" ) return "Poruszanie się";
	     if ( value == "Politics" ) return "Polityka";
	     if ( value == "Religion and Belief" ) return "Religie i Wyznania";
	     if ( value == "Rivers, Canals, and Lakes" ) return "Rzeki, Kanały i Jeziora";
	     if ( value == "Settlements" ) return "Osady";
	     if ( value == "Species" ) return "Rasy";
	     if ( value == "The Consumers' Guide" ) return "Przewodnik Konsumenta";
	     if ( value == "The Cursed and Fetid Marshlands" ) return "Przeklęte i Cuchnące Mokradła";
	     if ( value == "The Eight Lores" ) return "Osiem Tradycji";
	     if ( value == "The Grim, Dark Forests" ) return "Ponure Ciemne Lasy";
	     if ( value == "Trapping Lists" ) return "Lista Wyposażenia";
	     if ( value == "Core" ) return "Podstawa";
	     if ( value == "Moo's Homebrew" ) return "Zasady domowe Moo";
	     if ( value == "Career Tables" ) return "Tabele Profesji";
	     if ( value == "Character Creation" ) return "Tworzenie Postaci";
	     if ( value == "Corruption & Mutation Tables" ) return "Tabele Zepsucia i Mutacji";
	     if ( value == "Critical Hit Tables" ) return "Tabele Trafień Krytycznych";
	     if ( value == "GM Booklet" ) return "Książeczka MG";
	     if ( value == "Hit Location" ) return "Lokacje Trafień";
	}

	});
    }
});
