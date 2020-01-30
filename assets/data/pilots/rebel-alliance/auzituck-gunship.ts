import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Auzituck Gunship',
  xws: 'auzituckgunship',
  ffg: 6,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Auzituck.png',
  pilots: [
    {
      name: 'Kashyyyk Defender',
      initiative: 1,
      limited: 0,
      cost: 44,
      xws: 'kashyyykdefender',
      text:
        'Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_33.png',
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_33.jpg',
      ffg: 33,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Lowhhrick',
      caption: 'Escaped Gladiator',
      initiative: 3,
      limited: 1,
      cost: 52,
      xws: 'lowhhrick',
      ability:
        'After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_32.png',
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_32.jpg',
      ffg: 32,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Wullffwarro',
      caption: 'Wookiee Chief',
      initiative: 4,
      limited: 1,
      cost: 56,
      xws: 'wullffwarro',
      ability:
        'While you perform a primary attack, if you are damaged, you may roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_31.png',
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_31.jpg',
      ffg: 31,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
