import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Naboo Royal N-1 Starfighter',
  xws: 'nabooroyaln1starfighter',
  size: 'Small',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3RR',
    '4FW',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  pilots: [
    {
      name: 'Anakin Skywalker',
      initiative: 4,
      limited: 1,
      ability:
        'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      xws: 'anakinskywalker-nabooroyaln1starfighter',
      hyperspace: true,
      epic: true,
      cost: 41,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      force: { value: 1, recovers: 1, side: ['light'] },
      ffg: 558,
      caption: 'Hero of Naboo',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/21e28ea4e8784dce5a554a33888d8be0.png',
    },
    {
      name: 'Ric Olié',
      xws: 'ricolie',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      ability:
        "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
      caption: 'Bravo Leader',
      hyperspace: true,
      epic: true,
      cost: 42,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 557,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/87829b7b808c535eb1e2c8314b04971a.png',
    },
    {
      name: 'Padmé Amidala',
      xws: 'padmeamidala',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      caption: 'Aggressive Negotiator',
      hyperspace: true,
      epic: true,
      ability:
        'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
      cost: 45,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 559,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/3bc6bb14d0c80011145a36c132550298.png',
    },
    {
      name: 'Dineé Ellberger',
      xws: 'dineeellberger',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      ability:
        "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
      hyperspace: true,
      epic: true,
      cost: 38,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 560,
      caption: 'Bravo Five',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/06e0863851b95dba4874b211e05661cc.png',
    },
    {
      name: 'Bravo Flight Officer',
      xws: 'bravoflightofficer',
      initiative: 2,
      limited: 0,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      text:
        'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
      hyperspace: true,
      epic: true,
      cost: 33,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      ffg: 562,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/274db1f70ed4da939b9440837a30c39a.png',
    },
    {
      name: 'Naboo Handmaiden',
      xws: 'naboohandmaiden',
      initiative: 1,
      limited: 2,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      ability:
        'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
      conditions: ['decoyed'],
      hyperspace: true,
      epic: true,
      cost: 42,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      ffg: 561,
      caption: 'Regal Ruse',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/4493fe57050175b6a75e3a13e7553b1e.png',
    },
  ],
  ffg: 63,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;
