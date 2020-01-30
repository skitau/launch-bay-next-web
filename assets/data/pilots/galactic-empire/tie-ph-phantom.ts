import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ph Phantom',
  xws: 'tiephphantom',
  ffg: 27,
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Cloak' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPhantom.png',
  pilots: [
    {
      name: '"Echo"',
      caption: 'Slippery Trickster',
      initiative: 4,
      limited: 1,
      cost: 51,
      xws: 'echo',
      ability:
        'While you decloak, you must use the (2 [Bank Left]) or (2 [Bank Right]) template instead of the (2 [Straight]) template.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_132.png',
      shipAbility: {
        name: 'Stygium Array',
        text:
          'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Gunner', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_132.jpg',
      ffg: 132,
      hyperspace: false,
      epic: true,
    },
    {
      name: '"Whisper"',
      caption: 'Soft-Spoken Slayer',
      initiative: 5,
      limited: 1,
      cost: 57,
      xws: 'whisper',
      ability: 'After you perform an attack that hits, gain 1 evade token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_131.png',
      shipAbility: {
        name: 'Stygium Array',
        text:
          'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Gunner', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_131.jpg',
      ffg: 131,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Imdaar Test Pilot',
      initiative: 3,
      limited: 0,
      cost: 43,
      xws: 'imdaartestpilot',
      text:
        'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_134.png',
      shipAbility: {
        name: 'Stygium Array',
        text:
          'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Sensor', 'Gunner', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_134.jpg',
      ffg: 134,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Sigma Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 48,
      xws: 'sigmasquadronace',
      text:
        'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_133.png',
      shipAbility: {
        name: 'Stygium Array',
        text:
          'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Gunner', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_133.jpg',
      ffg: 133,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
