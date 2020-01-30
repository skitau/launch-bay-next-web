import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE Reaper',
  xws: 'tiereaper',
  ffg: 43,
  size: 'Medium',
  dial: [
    '0OR',
    '1LR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1PR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEReaper.png',
  pilots: [
    {
      name: '"Vizier"',
      caption: 'Ruthless Tactician',
      initiative: 2,
      limited: 1,
      cost: 45,
      xws: 'vizier',
      ability:
        'After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_115.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text:
          'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      },
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_115.jpg',
      ffg: 115,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Captain Feroph',
      caption: 'Imperial Courier',
      initiative: 3,
      limited: 1,
      cost: 47,
      xws: 'captainferoph',
      ability:
        'While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_114.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text:
          'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_114.jpg',
      ffg: 114,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Major Vermeil',
      caption: 'Veteran of Scarif',
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'majorvermeil',
      ability:
        'While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_113.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text:
          'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_113.jpg',
      ffg: 113,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Scarif Base Pilot',
      initiative: 1,
      limited: 0,
      cost: 39,
      xws: 'scarifbasepilot',
      text:
        "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_116.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/d3/22/d3220543-7735-44fc-80a8-90507ca363c8/g18x2-scarif-base-pilot-2.png',
          source: 'Season Two 2018',
        },
      ],
      shipAbility: {
        name: 'Adaptive Ailerons',
        text:
          'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      },
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_116.jpg',
      ffg: 116,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
