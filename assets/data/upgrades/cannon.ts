import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Heavy Laser Cannon',
    limited: 0,
    xws: 'heavylasercannon',
    sides: [
      {
        title: 'Heavy Laser Cannon',
        type: 'Cannon',
        ability:
          'Attack: After the Modify Attack Dice step, change all [Critical Hit] results to [Hit] results.',
        slots: ['Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_27.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_27.jpg',
        ffg: 256,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ion Cannon',
    limited: 0,
    xws: 'ioncannon',
    sides: [
      {
        title: 'Ion Cannon',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_28.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_28.jpg',
        ffg: 257,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Jamming Beam',
    limited: 0,
    xws: 'jammingbeam',
    sides: [
      {
        title: 'Jamming Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_29.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_29.jpg',
        ffg: 258,
      },
    ],
    cost: { value: 0 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Tractor Beam',
    limited: 0,
    xws: 'tractorbeam',
    sides: [
      {
        title: 'Tractor Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_30.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 259,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Autoblasters',
    limited: 0,
    xws: 'autoblasters',
    sides: [
      {
        title: 'Autoblasters',
        type: 'Cannon',
        ability:
          "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 578,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
];

export default t;
