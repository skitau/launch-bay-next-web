import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Lancer-class Pursuit Craft',
  xws: 'lancerclasspursuitcraft',
  ffg: 42,
  size: 'Large',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TB',
    '3BB',
    '3FB',
    '3NB',
    '3YB',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_ShadowCaster.png',
  pilots: [
    {
      name: 'Asajj Ventress',
      caption: 'Force of Her Own',
      initiative: 4,
      limited: 1,
      cost: 72,
      xws: 'asajjventress',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship in your [Single Turret Arc] at range 0-2 and spend 1 [Force]. If you do, that ship gains 1 stress token unless it removes 1 green token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_219.png',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: [
        'Force Power',
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_219.jpg',
      ffg: 219,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Ketsu Onyo',
      caption: 'Black Sun Contractor',
      initiative: 5,
      limited: 1,
      cost: 69,
      xws: 'ketsuonyo',
      ability:
        'At the start of the Engagement Phase, you may choose 1 ship in both your [Front Arc] and [Single Turret Arc] at range 0-1. If you do, that ship gains 1 tractor token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_218.png',
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_218.jpg',
      ffg: 218,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Sabine Wren',
      caption: 'Artistic Saboteur',
      initiative: 3,
      limited: 1,
      cost: 61,
      xws: 'sabinewren-lancerclasspursuitcraft',
      ability:
        'While you defend, if the attacker is in your [Single Turret Arc] at range 0-2, you may add 1 [Focus] result to your dice results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_220.png',
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_220.jpg',
      ffg: 220,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Shadowport Hunter',
      initiative: 2,
      limited: 0,
      cost: 56,
      xws: 'shadowporthunter',
      text:
        'Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_221.png',
      slots: ['Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_221.jpg',
      ffg: 221,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
