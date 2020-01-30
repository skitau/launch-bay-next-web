import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'StarViper-class Attack Platform',
  xws: 'starviperclassattackplatform',
  ffg: 3,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BW',
    '3FB',
    '3NW',
    '3PR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_StarViper.png',
  pilots: [
    {
      name: 'Black Sun Assassin',
      initiative: 3,
      limited: 0,
      cost: 48,
      xws: 'blacksunassassin',
      text:
        'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_181.png',
      shipAbility: {
        name: 'Microthrusters',
        text:
          'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_181.jpg',
      ffg: 181,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Black Sun Enforcer',
      initiative: 2,
      limited: 0,
      cost: 45,
      xws: 'blacksunenforcer',
      text:
        'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_182.png',
      shipAbility: {
        name: 'Microthrusters',
        text:
          'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_182.jpg',
      ffg: 182,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Dalan Oberos',
      caption: 'Elite Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'dalanoberos-starviperclassattackplatform',
      ability:
        'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90˚.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_179.png',
      shipAbility: {
        name: 'Microthrusters',
        text:
          'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_179.jpg',
      ffg: 179,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Guri',
      caption: "Prince Xizor's Bodyguard",
      initiative: 5,
      limited: 1,
      cost: 64,
      xws: 'guri',
      ability:
        'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_178.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      shipAbility: {
        name: 'Microthrusters',
        text:
          'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_178.jpg',
      ffg: 178,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Prince Xizor',
      caption: 'Black Sun Kingpin',
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'princexizor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_180.png',
      shipAbility: {
        name: 'Microthrusters',
        text:
          'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_180.jpg',
      ffg: 180,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
