import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE Advanced x1',
  xws: 'tieadvancedx1',
  ffg: 13,
  size: 'Small',
  dial: [
    '1BB',
    '1FW',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvanced.png',
  pilots: [
    {
      name: 'Darth Vader',
      caption: 'Black Leader',
      initiative: 6,
      limited: 1,
      cost: 67,
      xws: 'darthvader',
      ability:
        'After you perform an action, you may spend 1 [Force] to perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_93.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/24/0a/240a5d21-309c-4d3d-aef9-5dab25564b7b/op18xu_card_altart2.png',
          source: 'European and North American Championship 2018',
        },
      ],
      force: { value: 3, recovers: 1, side: ['dark'] },
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Force Power', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_93.jpg',
      ffg: 93,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Maarek Stele',
      caption: 'Servant of the Empire',
      initiative: 5,
      limited: 1,
      cost: 45,
      xws: 'maarekstele',
      ability:
        'While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_94.png',
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_94.jpg',
      ffg: 94,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Storm Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 39,
      xws: 'stormsquadronace',
      text:
        'The TIE Advanced x1 was produced in limited quantities, but Sienar engineers incorporated many of its best qualities into their next TIE model: the TIE Interceptor.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_97.png',
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_97.jpg',
      ffg: 97,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Tempest Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 36,
      xws: 'tempestsquadronpilot',
      text:
        'The TIE Advanced improved on the popular TIE/ln design by adding shielding, better weapons systems, curved solar panels, and a hyperdrive.',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/19/d5/19d5865e-09d1-4bad-b8ac-8e0c5124745a/op18xu_card_plastic2.png',
          source: 'European and North American Championship 2018',
        },
      ],
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Sensor', 'Missile', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_98.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_98.jpg',
      ffg: 98,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Ved Foslo',
      caption: 'Ambitious Engineer',
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'vedfoslo',
      ability:
        'While you execute a maneuver, you may execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_95.png',
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_95.jpg',
      ffg: 95,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zertik Strom',
      caption: 'Pitiless Administrator',
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'zertikstrom',
      ability:
        "During the End Phase, you may spend a lock you have on an enemy ship to expose 1 of that ship's damage cards.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_96.png',
      shipAbility: {
        name: 'Advanced Targeting Computer',
        text:
          'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_96.jpg',
      ffg: 96,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
