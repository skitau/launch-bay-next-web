import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'G-1A Starfighter',
  xws: 'g1astarfighter',
  ffg: 22,
  size: 'Medium',
  dial: [
    '0OR',
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
    '2KR',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_MistHunter.png',
  pilots: [
    {
      name: '4-LOM',
      caption: 'Reprogrammed Protocol Droid',
      initiative: 3,
      limited: 1,
      cost: 49,
      xws: '4lom',
      ability:
        'After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_201.png',
      slots: ['Talent', 'Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Jam' },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_201.jpg',
      ffg: 201,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Gand Findsman',
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'gandfindsman',
      text:
        'The legendary Findsmen of Gand worship the enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_203.png',
      slots: ['Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_203.jpg',
      ffg: 203,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Zuckuss',
      caption: 'Meditative Gand',
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: 'zuckuss',
      ability:
        'While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_202.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/62/69/6269d549-8a5b-40f6-84cb-6ef6fa47212f/op067_zuckuss.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      slots: ['Talent', 'Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_202.jpg',
      ffg: 202,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
