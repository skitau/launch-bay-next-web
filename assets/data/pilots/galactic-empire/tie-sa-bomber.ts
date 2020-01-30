import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/sa Bomber',
  xws: 'tiesabomber',
  ffg: 19,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
    '5KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEBomber.png',
  pilots: [
    {
      name: '"Deathfire"',
      caption: 'Unflinching Diehard',
      initiative: 2,
      limited: 1,
      cost: 32,
      xws: 'deathfire',
      ability:
        'After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_110.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_110.jpg',
      ffg: 110,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Captain Jonus',
      caption: 'Disciplined Instructor',
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'captainjonus',
      ability:
        'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_108.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_108.jpg',
      ffg: 108,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Gamma Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 30,
      xws: 'gammasquadronace',
      text:
        "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_111.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_111.jpg',
      ffg: 111,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Major Rhymer',
      caption: 'Scimitar Leader',
      initiative: 4,
      limited: 1,
      cost: 37,
      xws: 'majorrhymer',
      ability:
        'While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_109.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_109.jpg',
      ffg: 109,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Scimitar Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 27,
      xws: 'scimitarsquadronpilot',
      text:
        'The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_112.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_112.jpg',
      ffg: 112,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Tomax Bren',
      caption: 'Brash Maverick',
      initiative: 5,
      limited: 1,
      cost: 35,
      xws: 'tomaxbren',
      ability:
        'After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_107.png',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_107.jpg',
      ffg: 107,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
