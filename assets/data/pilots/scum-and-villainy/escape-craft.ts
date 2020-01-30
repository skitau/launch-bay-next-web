import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Escape Craft',
  xws: 'escapecraft',
  ffg: 48,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FW',
    '3NW',
    '3KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_EscapeShuttle.png',
  pilots: [
    {
      name: 'Autopilot Drone',
      caption: 'Set to Blow',
      initiative: 1,
      limited: 1,
      cost: 12,
      xws: 'autopilotdrone',
      text: "Sometimes, manufacturer's warnings are made to be broken.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_229.png',
      charges: { value: 3, recovers: 0 },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      shipAbility: {
        name: 'Rigged Energy Cells',
        text:
          'During the System Phase, if you are not docked, lose 1 [Charge]. At the end of the Activation Phase, if you have 0 [Charge], you are destroyed. Before you are removed, each ship at range 0-1 suffers 1 [Critical Hit] damage.',
      },
      slots: [],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_229.jpg',
      ffg: 229,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'L3-37',
      caption: 'Droid Revolutionary',
      initiative: 2,
      limited: 1,
      cost: 26,
      xws: 'l337-escapecraft',
      ability:
        'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_228.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      shipAbility: {
        name: 'Co-Pilot',
        text:
          'While you are docked, your carrier ship has your pilot ability in addition to its own.',
      },
      slots: ['Talent', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_228.jpg',
      ffg: 228,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Lando Calrissian',
      caption: 'Smooth-talking Gambler',
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'landocalrissian-escapecraft',
      ability:
        'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results. Co-Pilot: While you are docked, your carrier ship has your pilot ability in addition to its own.',
      shipAbility: {
        name: 'Co-Pilot',
        text:
          'While you are docked, your carrier ship has your pilot ability in addition to its own.',
      },
      slots: ['Talent', 'Crew', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_226.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_226.jpg',
      ffg: 226,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Outer Rim Pioneer',
      caption: 'Skillful Outlaw',
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'outerrimpioneer',
      ability:
        'Friendly ships at range 0-1 can perform attacks at range 0 of obstacles.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_227.png',
      shipAbility: {
        name: 'Co-Pilot',
        text:
          'While you are docked, your carrier ship has your pilot ability in addition to its own.',
      },
      slots: ['Talent', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_227.jpg',
      ffg: 227,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
