import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'VT-49 Decimator',
    de: 'VT-49-Decimator',
    fr: 'Décimateur VT-49',
    it: 'Decimator VT-49',
    pl: 'VT-49 Decimator',
    pt: 'VT-49 Decimator',
    zh: 'VT-49 Decimator',
    es: 'VT-49 Diezmador',
  },
  xws: 'vt49decimator',
  ffg: 28,
  size: 'Large',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Decimator.png',
  pilots: [
    {
      name: {
        en: 'Captain Oicunn',
        de: 'Captain Oicunn',
        fr: 'Capitaine Oicunn',
        es: 'Capitán Oicunn',
        it: 'Capitano Oicunn',
        pl: 'Kapitan Oicunn',
        pt: 'Capitão Oicunn',
        zh: 'Captain Oicunn',
      },
      caption: {
        en: 'Inspired Tactician',
        de: 'Genialer Taktiker',
        fr: 'Tacticien Inspiré',
        es: 'Estratega inspirado',
        it: 'Tattico Ispirato',
        pl: 'Genialny taktyk',
        pt: 'Estrategista Inspirado',
        zh: 'Inspired Tactician',
      },
      initiative: 3,
      limited: 1,
      cost: 74,
      xws: 'captainoicunn',
      ability: {
        en: 'You can perform primary attacks at range 0.',
        de: 'Du kannst Primärangriffe in Reichweite 0 durchführen.',
        fr: 'Vous pouvez effectuer vos attaques principales à portée 0.',
        es: 'Eres capaz de efectuar ataques principales a alcance 0.',
        it: 'Puoi effettuare attacchi primari a gittata 0.',
        pl: 'Możesz wykonywać ataki podstawowe w zasięgu 0.',
        pt: 'Você consegue realizar ataquesprimários em alcance 0.',
        zh: 'You can perform primary attacks at range 0.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_146.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fb3c69fe5e05a5720445db59abd7004f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/68b3be7e16b03c82d5b453371b32c00c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/13d884f0111ec0782245d5f934ea1e0a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e8249f0a42caa68d5eeb169e7ce11410.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/262353555457b70cacd4611db1116d50.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/1ee1dd4612585292af3a4a7a93ce3d0f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_146.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_146.jpg',
      ffg: 146,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Patrol Leader',
        de: 'Patrouillenführer',
        fr: 'Chef de Patrouille',
        es: 'Jefe de Patrulla',
        it: 'Capopattuglia',
        pl: 'Dowódca patrolu',
        pt: 'Líder de Patrulha',
        zh: 'Patrol Leader',
      },
      initiative: 2,
      limited: 0,
      cost: 67,
      xws: 'patrolleader',
      text: {
        en:
          'To be granted command of a VT-49 Decimator is seen as a significant promotion for a middling officer of the Imperial Navy.',
        de:
          'Das Kommando über einen VT-49-Decimator zu erhalten, gilt unter imperialen Flottenoffizieren der mittleren Rangebenen als äußerst erstrebenswertes Ziel.',
        fr:
          "Recevoir le commandement d'un Décimateur VT-49 est une promotion de taille pour un officier moyen de la Marine Impériale.",
        es:
          'Recibir el mando de un VT-49 Diezmador se considera un importante ascenso para los oficiales regulares de la Armada Imperial.',
        it:
          'Ottenere il comando di un Decimator VT-49 era considerato una promozione importante per un ufficiale di medio rango della Flotta Imperiale.',
        pl:
          'Otrzymanie pod komendę statku VT-49 Decimator to dla średniego rangą oficera Floty Imperialnej znaczący awans.',
        pt:
          'Receber o comando de uma VT-49 Decimatoré visto como uma promoção considerávelpara um oficial comum da Marinha Imperial.',
        zh:
          'To be granted command of a VT-49 Decimator is seen as a significant promotion for a middling officer of the Imperial Navy.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_148.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/67e4a7d580026a6c2c1564372bb5fd4c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/352a50e34a167145c74adde2e1cfcd05.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8b10d56e82ffd8457d816d55c9530c70.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2cd13ebb7670044ce1c2a761997634d6.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3618433bc582fe5a854f25bc5125554e.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f86ae5b8ff2fdd590334fa9a8b122864.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_148.png',
      },
      slots: [
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_148.jpg',
      ffg: 148,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Rear Admiral Chiraneau',
        de: 'Konteradmiral Chiraneau',
        fr: 'Vice-Amiral Chiraneau',
        es: 'Contralmirante Chiraneau',
        it: 'Contrammiraglio Chiraneau',
        pl: 'Kontradmirał Chiraneau',
        pt: 'Almirante deRetaguarda Chiraneau',
        zh: 'Rear Admiral Chiraneau',
      },
      caption: {
        en: 'Advisor to Admiral Piett',
        de: 'Berater von Admiral Piett',
        fr: "Conseiller de l'Amiral Piett",
        es: 'Asesor del almirante Piett',
        it: "Consigliere dell'Ammiraglio Piett",
        pl: 'Doradca admirała Pietta',
        pt: 'Assessor do Almirante Piett',
        zh: 'Advisor to Admiral Piett',
      },
      initiative: 5,
      limited: 1,
      cost: 76,
      xws: 'rearadmiralchiraneau',
      ability: {
        en:
          'While you perform an attack, if you are reinforced and the defender is in the [Full Front Arc] or [Full Rear Arc] matching your reinforce token, you may change 1 of your [Focus] results to a [Critical Hit] result.',
        de:
          'Solange du einen Angriff durchführst, falls du verstärkt bist und der Verteidiger in dem [Full Front Arc] oder [Full Rear Arc] ist, der zu deinem Verstärkungsmarker passt, darfst du 1 deiner [Focus]-Ergebnisse in ein [Critical Hit]-Ergebnis ändern.',
        fr:
          "Tant que vous effectuez une attaque, si vous êtes renforcé et si le défenseur est dans l'arc [Full Front Arc] ou [Full Rear Arc] correspondant à votre marqueur de renforcement, vous pouvez changer 1 de vos résultats [Focus] en un résultat [Critical Hit].",
        es:
          'Mientras efectúas un ataque, si estás reforzado y el defensor está en el [Full Front Arc] o [Full Rear Arc] que coincide con el de tu ficha de Refuerzo, puedes cambiar 1 de tus resultados [Focus] por un resultado [Critical Hit].',
        it:
          'Mentre effettui un attacco, se sei rinforzato e il difensore è nel [Full Front Arc] o [Full Rear Arc] corrispondente al tuo segnalino rinforzo, puoi cambiare 1 tuo risultato [Focus] in 1 risultato [Critical Hit].',
        pl:
          'Gdy wykonujesz atak i jesteś wzmocniony, a obrońca jest w twojej [Full Front Arc] albo [Full Rear Arc] pasującej do twojego żetonu wzmocnienia, możesz zmienić 1 ze swoich wyników [Focus] na wynik [Critical Hit].',
        pt:
          'Quando realizar um ataque, se estiver reforçado e o defensor estiver no [Full Front Arc] ou [Full Rear Arc] correspondente à sua ficha de reforço, você pode mudar 1 de seus resultados [Focus] para um resultado [Critical Hit].',
        zh:
          'While you perform an attack, if you are reinforced and the defender is in the [Full Front Arc] or [Full Rear Arc] matching your reinforce token, you may change 1 of your [Focus] results to a [Critical Hit] result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_147.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/99b99ca624a225b280db1e8bad6442ad.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/bb76b040321394836c35e8fb9bf0b53b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1c1a2a80638fdb7f1e1b35e6f3aa61dc.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/116b6fdcc659231346a42b9d9b6ac455.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0d7be735887a94e5c30946a47ccce854.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7c0fbd009e1568ce0212107d00c613e4.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_147.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_147.jpg',
      ffg: 147,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Morna Kee',
        de: 'Morna Kee',
        fr: 'Morna Kee',
        es: 'Morna Kee',
        it: 'Morna Kee',
        pl: 'Morna Kee',
        pt: 'Morna Kee',
        zh: 'Morna Kee',
      },
      caption: {
        en: 'Determined Attaché',
        de: 'Willensstarke Attachée',
        fr: 'Attachée Déterminée',
        es: 'Agregada militar pertinaz',
        it: 'Determined Attaché',
        pl: 'Determined Attaché',
        pt: 'Determined Attaché',
        zh: 'Determined Attaché',
      },
      initiative: 4,
      limited: 1,
      cost: 75,
      xws: 'mornakee',
      ability: {
        en:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
        de:
          'Während der Endphase darfst du 1 [Charge] ausgeben, um 1 deiner Verstärkungsmarker auf deinen anderen vollen Winkel umzudre-hen, anstatt ihn zu entfernen.',
        fr:
          'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour retourner 1 de vos marqueurs de renforcement vers votre autre arc entier au lieu de le retirer.',
        es:
          'Durante la fase Final, pueds gastar 1 [Charge] para trasladar 1 de tus fichas de Refuerzo a tu otro arco completo en vez de retirarla.',
        it:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
        pl:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
        pt:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
        zh:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
      },
      charges: { value: 3, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      hyperspace: true,
      epic: true,
      ffg: 634,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/225bca650e1881d2a44dcce09dc1a056.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7b8e54f54baceb79e86f257e14843dc7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/58af73002accc8eb92a7b3e3789f2e79.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
      },
    },
  ],
};

export default t;
