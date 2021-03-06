import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/sf Fighter',
    de: 'TIE/sf-Jäger',
    fr: 'Chasseur TIE/sf',
    it: 'Caccia TIE/sf',
    pl: 'Myśliwiec TIE/sf',
    pt: 'TIE/sf Fighter',
    zh: 'TIE/sf Fighter',
    es: 'Caza TIE/sf',
  },
  xws: 'tiesffighter',
  ffg: 50,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Evade',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Lock',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: {
      en: 'Heavy Weapon Turret',
      de: 'Schwerer Geschützturm',
      fr: "Tourelle d'Arme Lourde",
      es: 'Torreta de arma pesada',
      it: 'Torretta Arma Pesante',
      pl: 'Wieżyczka z ciężką bronią',
      pt: 'Heavy Weapon Turret',
      zh: 'Heavy Weapon Turret',
    },
    text: {
      en:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      de:
        'Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren. Du musst die [Front Arc]-Voraussetzung deiner ausgerüsteten [Missile]-Aufwertungen behandeln, als wäre sie [Single Turret Arc].',
      fr:
        'vous pouvez pivoter votre indicateur [Single Turret Arc] uniquement vers votre [Front Arc] ou [Rear Arc]. Vous devez considérer le prérequis [Front Arc] de vos améliorations [Missile] équipées comme étant [Single Turret Arc].',
      es:
        'Eres capaz de reorientar tu indicador [Single Turret Arc], pero sólo hacia tu [Front Arc] o [Rear Arc]. El requisito [Front Arc] de las mejoras [Missile] que tengas equipadas debes considerarlo como si fuera [Single Turret Arc].',
      it:
        'Puoi ruotare il tuo segnalatore [Single Turret Arc] soltanto sui tuoi [Front Arc] o [Rear Arc]. Devi considerare il requisito [Front Arc] delle migliorie [Missile] di cui sei dotato come se fosse [Single Turret Arc].',
      pl:
        'Wolno ci obracać twój wskaźnik [Single Turret Arc] tylko na twoją [Front Arc] albo [Rear Arc]. Musisz traktować wymagania [Front Arc] z rozwinięć [Missile], w które jesteś wyposażony, jak [Single Turret Arc].',
      pt:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      zh:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEsf.png',
  pilots: [
    {
      name: {
        en: '"Quickdraw"',
        de: '„Quickdraw"',
        fr: '"Quickdraw"',
        es: '"Centella"',
        it: '"Quickdraw"',
        pl: '„Błysk"',
        pt: '"Quickdraw"',
        zh: '"Quickdraw"',
      },
      caption: {
        en: 'Defiant Duelist',
        de: 'Kühner Zweikämpfer',
        fr: 'Duelliste Provocateur',
        es: 'Duelista desafiante',
        it: 'Duellante Sprezzante',
        pl: 'Żądna rywalizacji',
        pt: 'Defiant Duelist',
        zh: 'Defiant Duelist',
      },
      initiative: 6,
      limited: 1,
      cost: 47,
      xws: 'quickdraw',
      ability: {
        en:
          'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
        de:
          'Nachdem du ein Schild verloren hast, darfst du 1 [Charge] ausgeben. Falls du das tust, darfst du einen Bonus-Primärangriff durchführen.',
        fr:
          'Après avoir perdu un bouclier, vous pouvez dépenser 1 [Charge]. Dans ce cas, vous pouvez effectuer une attaque principale bonus.',
        es:
          'Después de que pierdas un escudo, puedes gastar 1 [Charge]. Si lo haces, puedes efectuar un ataque principal adicional.',
        it:
          'Dopo che hai perso uno scudo, puoi spendere 1 [Charge]. Se lo fai, puoi effettuare 1 attacco primario bonus.',
        pl:
          'Gdy stracisz osłonę, możesz wydać 1 [Charge], aby wykonać dodatkowy atak podstawowy.',
        pt:
          'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
        zh:
          'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      charges: { value: 1, recovers: 1 },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5d1c8a4b2a1fa56fb5a763b2ea0b4aa9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/559f431fc82200b1647d4116d6e52741.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8ed4133efe3bed88ba74147f32244b4b.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/29a430277c551518e623578edc7e65d2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/4a546a001915e85a32f52a80a2a2881b.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/86f8ccc959081a43dc4d0dbeb921d0ba.jpg',
      ffg: 406,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Backdraft"',
        de: '„Backdraft"',
        fr: '"Backdraft"',
        es: '"Llamarada"',
        it: '"Backdraft"',
        pl: '„Podmuch"',
        pt: '"Backdraft"',
        zh: '"Backdraft"',
      },
      caption: {
        en: 'Fiery Fanatic',
        de: 'Glühender Fanatiker',
        fr: 'Ardent Fanatique',
        es: 'Fanático furibundo',
        it: 'Fanatico Furioso',
        pl: 'Impulsywny fanatyk',
        pt: 'Fiery Fanatic',
        zh: 'Fiery Fanatic',
      },
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'backdraft',
      ability: {
        en:
          'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
        de:
          'Solange du einen [Single Turret Arc]-Primärangriff durchführst, falls der Verteidiger in deinem [Rear Arc] ist, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous effectuez une attaque principale [Single Turret Arc], si le défenseur est dans votre [Rear Arc], lancez 1 dé supplémentaire..',
        es:
          'Mientras efectúas un ataque principal [Single Turret Arc], si el defensor está en tu [Rear Arc], tira 1 dado adicional.',
        it:
          'Mentre effettui un attacco primario [Single Turret Arc], se il difensore è neltuo [Rear Arc], tira 1 dado aggiuntivo. .',
        pl:
          'Gdy wykonujesz atak podstawowy [Single Turret Arc], jeżeli obrońca znaajduje się w twojej [Rear Arc], rzucasz 1 dodatkową kością.',
        pt:
          'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
        zh:
          'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/68886a6ca4d5cedd5a7422fbe1ebcb77.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3fac96d14f420cda9b4e7985f0038738.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/d2e56ff2d6be5f600eea7a1fe8c6aa42.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/3514fcae466f8daa9dcdcf04084185a3.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/e62964fc66bbffe7913653fa61fe4be7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6c3a06877712596601ba1cc4ec533626.jpg',
      ffg: 407,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Omega Squadron Expert',
        de: 'Elitepilot der \nOmega-Staffel',
        fr: "Expert de l'Escadron Omega",
        es: 'Experto del Escuadrón Omega',
        it: 'Esperto della Squadriglia Omega',
        pl: 'Ekspert Eskadry Omega',
        pt: 'Omega Squadron Expert',
        zh: 'Omega Squadron Expert',
      },
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'omegasquadronexpert',
      text: {
        en:
          'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
        de:
          'Der TIE/se ist ein vielseitiger Jäger, der mit seinen spezialisierten Waffen und Bordsystemen bestens für die Einsätze der Spezialeinheiten ausgerüstet ist.',
        fr:
          "Le TIE/sf est un appareil polyvalent qui embarque de l'armement spécialisé et des systèmes expérimentaux utilisés lors des opérations à long rayon d'action des Forces spéciales du Premier Ordre..",
        es:
          'El TIE/sf es un caza estelar muy versátil provisto de armamento especializado y sistemas experimentales para operaciones de largo alcance llevadas a cabo por las Fuerzas Especiales de la Primera Orden.',
        it:
          'Il TIE/sf è un astrocaccia versatile che monta armamenti specializzati e sistemi sperimentali per le operazioni a lungo raggio delle Forze Speciali del Primo Ordine.',
        pl:
          'TIE/sf to wszechstronny myśliwiec gwiezdny, który przenosi specjalistyczną broń i eksperymentalne systemy do operacji dalekiego zasięgu.',
        pt:
          'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
        zh:
          'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/379110af42265d758b40bb0bb3cd4a30.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/de04413b4fa238da3b1f20407fd4d40f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b51c3c9263fef66c4f4d4f3fdffb332d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/ad0de8a8b7f3ab27f7dfb021036dd87d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a57a1e1c83a822e053e5ea35eaeef11a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2caf1312bd6aba3630ef6edc1ff81f53.jpg',
      ffg: 408,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Zeta Squadron Survivor',
        de: 'Überlebender \nder Zeta-Staffel',
        fr: "Survivant de l'Escadron Zeta",
        es: 'Superviviente del Escuadrón Zeta',
        it: 'Sopravvissuto della Squadriglia Zeta',
        pl: 'Ocalały z Eskadry Zeta',
        pt: 'Zeta Squadron Survivor',
        zh: 'Zeta Squadron Survivor',
      },
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'zetasquadronsurvivor',
      text: {
        en:
          'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
        de:
          'Seit ihrer beschämenden Niederlage kämpfen die Piloten der Starkiller-Basis noch erbitterter gegen den Widerstand, um sich zu rehabilitieren.',
        fr:
          'Humiliés par leur défaite, les pilotes rescapés de la base Starkiller sont impatients de démontrer leur talent face aux combattants de la Résistance.',
        es:
          'Humillados por su fracaso, los pilotos restantes de la base Starkiller están ansiosos por demostrar su valía mientras persiguen a la Resistencia.',
        it:
          'Umiliati dal loro fallimento, i piloti sopravvissuti della Base Starkiller sono impazienti di riscattarsi dando la caccia alle forze della Resistenza.',
        pl:
          'Pozostali przy życiu piloci z Bazy Starkiller próbują zmazać plamę na honorze, ścigając Ruch Oporu.',
        pt:
          'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
        zh:
          'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
      },
      slots: ['Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2af8aecf27647c9875045f370ad04e0d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f434f000f1994bc508d84c22167377da.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/49850fc7671cb17a93484201f43c14ef.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c4d80f579ff196b92a10e874f02fb3f7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f36afc41e1527f22db8a4bd544145e88.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 409,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant LeHuse',
        de: 'Lieutenant LeHuse',
        fr: 'Lieutenant LeHuse',
        es: 'Teniente LeHuse',
        it: 'Lieutenant LeHuse',
        pl: 'Lieutenant LeHuse',
        pt: 'Lieutenant LeHuse',
        zh: 'Lieutenant LeHuse',
      },
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'lieutenantlehuse',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/41a105e8e2485c0ccb17f5215c092b07.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c7366ec1f085f33c2c85ac71dfc3a810.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/be0c48cb3fdab2be3700c8c5f8d981e3.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 641,
      hyperspace: true,
      epic: true,
      caption: {
        en: 'Unflinching Executioner',
        de: 'Unnachgiebiger Scharfrichter',
        fr: 'Bourreau Indéfectible',
        es: 'Verdugo imperturbable',
        it: 'Unflinching Executioner',
        pl: 'Unflinching Executioner',
        pt: 'Unflinching Executioner',
        zh: 'Unflinching Executioner',
      },
      ability: {
        en:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
        de:
          'Solange du einen Angriff durchführst, darfst du die Zielerfassung ei-nes anderen befreundeten Schiffes auf dem Verteidiger ausgeben, um beliebig viele deiner Ergebnisse neu zu wer-fen.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser le verrouillage d'un autre vaisseau allié sur le défenseur pour relancer n'importe quel nombre de vos résultats.",
        es:
          'Mientras efectúas un ataque, puedes gastar el Blanco fijado que otra nave aliada tenga sobre el defensor para volver a tirar cualquier cantidad de tus resultados.',
        it:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
        pl:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
        pt:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
        zh:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
      },
    },
    {
      name: {
        en: 'Captain Phasma',
        de: 'Captain Phasma',
        fr: 'Capitaine Phasma',
        es: 'Capitán Phasma',
        it: 'Captain Phasma',
        pl: 'Captain Phasma',
        pt: 'Captain Phasma',
        zh: 'Captain Phasma',
      },
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'captainphasma',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9ba82850d7a4f091ad7b6a74c5db4178.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8bbe7258bace3d9789577324564ce335.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/0aa124827895ca23a0e7957967fd3f1e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      hyperspace: true,
      epic: true,
      ffg: 642,
      caption: {
        en: 'Scyre Survivor',
        de: 'Überlebende des Scyre-Angriffs',
        fr: 'Survivante du Clan Scyre',
        es: 'Superviviente del clan Scyre',
        it: 'Scyre Survivor',
        pl: 'Scyre Survivor',
        pt: 'Scyre Survivor',
        zh: 'Scyre Survivor',
      },
      ability: {
        en:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", muss ein anderes befreundetes Schiff in Reichweite 0-1 1 [Hit]/[Critical Hit]-Schaden erleiden, um 1 passendes Ergebnis zu negieren.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », un autre vaisseau allié à portée 0-1 doit subir 1 dégât [Hit]/[Critical Hit] pour annuler 1 résultat correspondant.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar resultados", otra nave aliada que tengas a alcance 0-1 debe sufrirr 1 de daño [Hit]/[Critical Hit] para anular 1 resultado equivalente.',
        it:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        pl:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        pt:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        zh:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
      },
    },
  ],
};

export default t;
