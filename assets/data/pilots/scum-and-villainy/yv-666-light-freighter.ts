import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YV-666 Light Freighter',
  xws: 'yv666lightfreighter',
  ffg: 24,
  size: 'Large',
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
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_YV-666.png',
  pilots: [
    {
      name: 'Bossk',
      caption: 'Fearsome Hunter',
      initiative: 4,
      limited: 1,
      cost: 62,
      xws: 'bossk',
      ability:
        'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_210.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/f7/65/f765febe-2e28-4f9f-8ee0-1dbc4c013ef3/op067_bossk.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_210.jpg',
      ffg: 210,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Latts Razzi',
      caption: 'Martial Artist',
      initiative: 3,
      limited: 1,
      cost: 57,
      xws: 'lattsrazzi',
      ability:
        'At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_212.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_212.jpg',
      ffg: 212,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Moralo Eval',
      caption: 'Criminal Mastermind',
      initiative: 4,
      limited: 1,
      cost: 66,
      xws: 'moraloeval',
      ability:
        'If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_211.png',
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_211.jpg',
      ffg: 211,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Trandoshan Slaver',
      initiative: 2,
      limited: 0,
      cost: 52,
      xws: 'trandoshanslaver',
      text:
        'The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_213.png',
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_213.jpg',
      ffg: 213,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
