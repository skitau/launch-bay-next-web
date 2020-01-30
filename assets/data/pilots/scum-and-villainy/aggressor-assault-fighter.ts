import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Aggressor Assault Fighter',
  xws: 'aggressorassaultfighter',
  ffg: 21,
  size: 'Medium',
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
    '3BB',
    '3FB',
    '3NB',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_IG-2000.png',
  pilots: [
    {
      name: 'IG-88A',
      caption: 'Aggressive Automaton',
      initiative: 4,
      limited: 1,
      cost: 67,
      xws: 'ig88a',
      ability:
        'At the start of the Engagement Phase, you may choose 1 friendly ship with [Calculate] on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_197.png',
      shipAbility: {
        name: 'Advanced Droid Brain',
        text: 'After you perform a [Calculate] action, gain 1 calculate token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_197.jpg',
      ffg: 197,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'IG-88B',
      caption: 'Brutal Battledroid',
      initiative: 4,
      limited: 1,
      cost: 63,
      xws: 'ig88b',
      ability:
        'After you perform an attack that misses, you may perform a bonus [Cannon] attack.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_198.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/26/e9/26e959b8-34a2-4d0d-93b1-2efad56cd573/op067_ig-88d.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      shipAbility: {
        name: 'Advanced Droid Brain',
        text: 'After you perform a [Calculate] action, gain 1 calculate token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_198.jpg',
      ffg: 198,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'IG-88C',
      caption: 'Conniving Contraption',
      initiative: 4,
      limited: 1,
      cost: 64,
      xws: 'ig88c',
      ability:
        'After you perform a [Boost] action, you may perform an [Evade] action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_199.png',
      shipAbility: {
        name: 'Advanced Droid Brain',
        text: 'After you perform a [Calculate] action, gain 1 calculate token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_199.jpg',
      ffg: 199,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'IG-88D',
      caption: 'Deadly Device',
      initiative: 4,
      limited: 1,
      cost: 63,
      xws: 'ig88d',
      ability:
        "While you execute a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver, you may use another template of the same speed instead: either the turn ([Turn Left] or [Turn Right]) of the same direction or the straight ([Straight]) template.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_200.png',
      shipAbility: {
        name: 'Advanced Droid Brain',
        text: 'After you perform a [Calculate] action, gain 1 calculate token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_200.jpg',
      ffg: 200,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
