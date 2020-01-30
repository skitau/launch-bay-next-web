import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'VCX-100 Light Freighter',
  xws: 'vcx100lightfreighter',
  ffg: 23,
  size: 'Large',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Ghost.png',
  pilots: [
    {
      name: '"Chopper"',
      caption: 'Spectre-3',
      initiative: 2,
      limited: 1,
      cost: 68,
      xws: 'chopper',
      ability:
        'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_75.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Reinforce' },
      ],
      shipAbility: {
        name: 'Tail Gun',
        text:
          "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      },
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_75.jpg',
      ffg: 75,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Hera Syndulla',
      caption: 'Spectre-2',
      initiative: 5,
      limited: 1,
      cost: 72,
      xws: 'herasyndulla-vcx100lightfreighter',
      ability:
        'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_73.png',
      shipAbility: {
        name: 'Tail Gun',
        text:
          "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      },
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_73.jpg',
      ffg: 73,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Kanan Jarrus',
      caption: 'Spectre-1',
      initiative: 3,
      limited: 1,
      cost: 80,
      xws: 'kananjarrus',
      ability:
        'While a friendly ship in your firing arc defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_74.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Tail Gun',
        text:
          "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      },
      slots: [
        'Force Power',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_74.jpg',
      ffg: 74,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Lothal Rebel',
      initiative: 2,
      limited: 0,
      cost: 67,
      xws: 'lothalrebel',
      text:
        'Another successful Corellian Engineering Corporation freighter design, the VCX-100 is larger than the ubiquitous YT-series, boasting more living space and customizability.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_76.png',
      shipAbility: {
        name: 'Tail Gun',
        text:
          "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      },
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_76.jpg',
      ffg: 76,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Alexsandr Kallus',
      xws: 'alexsandrkallus',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Tail Gun',
        text:
          "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      },
      caption: 'Fulcrum',
      hyperspace: false,
      epic: true,
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      ability:
        'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
      cost: 69,
      ffg: 631,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/af4c16c8955bddf75d5eb7723c7a5f2d.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/f78c33b746f35f6848708327178dec80.png',
    },
  ],
};

export default t;
