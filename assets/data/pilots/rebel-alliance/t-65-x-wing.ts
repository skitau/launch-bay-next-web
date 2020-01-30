import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'T-65 X-wing',
  xws: 't65xwing',
  ffg: 33,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_X-wing-T65.png',
  pilots: [
    {
      name: 'Biggs Darklighter',
      caption: 'Red Three',
      initiative: 3,
      limited: 1,
      cost: 48,
      xws: 'biggsdarklighter',
      ability:
        'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] damage to cancel 1 matching result.',
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_7.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_7.jpg',
      ffg: 7,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Blue Squadron Escort',
      initiative: 2,
      limited: 0,
      cost: 40,
      xws: 'bluesquadronescort',
      text:
        'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_11.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_11.jpg',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/9c/1a/9c1ad7ef-dfb1-427c-b700-747d857f53fc/op066-blue-squadron-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 11,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Cavern Angels Zealot',
      initiative: 1,
      limited: 0,
      cost: 39,
      xws: 'cavernangelszealot',
      text:
        "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that raged from Geonosis to Jedha.",
      slots: [
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_12.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_12.jpg',
      ffg: 12,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Edrio Two Tubes',
      caption: 'Cavern Angels Veteran',
      initiative: 2,
      limited: 1,
      cost: 43,
      xws: 'edriotwotubes',
      ability:
        'Before you activate, if you are focused, you may perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_9.png',
      slots: [
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_9.jpg',
      ffg: 9,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Garven Dreis',
      caption: 'Red Leader',
      initiative: 4,
      limited: 1,
      cost: 47,
      xws: 'garvendreis-t65xwing',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_4.png',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_4.jpg',
      ffg: 4,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Jek Porkins',
      caption: 'Red Six',
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'jekporkins',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_5.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_5.jpg',
      ffg: 5,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Kullbee Sperado',
      caption: 'Enigmatic Gunslinger',
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'kullbeesperado',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_6.png',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_6.jpg',
      ffg: 6,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Leevan Tenza',
      caption: 'Rebel Alliance Defector',
      initiative: 3,
      limited: 1,
      cost: 44,
      xws: 'leevantenza',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_8.png',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_8.jpg',
      ffg: 8,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Luke Skywalker',
      caption: 'Red Five',
      initiative: 5,
      limited: 1,
      cost: 62,
      xws: 'lukeskywalker',
      ability:
        'After you become the defender (before dice are rolled), you may recover 1 [Force].',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_2.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/5b/aa/5baa3742-b7b2-47d7-9bec-07f02fafaf1c/op066-luke-skywalker.png',
          source: 'X-Wing Second Edition Launch Party',
        },
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/ab/5d/ab5d5131-0043-4b74-9549-5e959aaaf47a/op086-luke-skywalker.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      slots: [
        'Force Power',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_2.jpg',
      ffg: 2,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Red Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 41,
      xws: 'redsquadronveteran',
      text:
        'Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_10.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_10.jpg',
      ffg: 10,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Thane Kyrell',
      caption: 'Corona Four',
      initiative: 5,
      limited: 1,
      cost: 48,
      xws: 'thanekyrell',
      ability:
        "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_3.png',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_3.jpg',
      ffg: 3,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Red Two',
      initiative: 6,
      limited: 1,
      cost: 55,
      xws: 'wedgeantilles',
      ability:
        'While you perform an attack, the defender rolls 1 fewer defense die.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_1.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_1.jpg',
      ffg: 1,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
