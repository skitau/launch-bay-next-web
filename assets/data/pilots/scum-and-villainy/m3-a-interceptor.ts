import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'M3-A Interceptor',
  xws: 'm3ainterceptor',
  ffg: 44,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Scyk.png',
  pilots: [
    {
      name: 'Cartel Spacer',
      initiative: 1,
      limited: 0,
      cost: 25,
      xws: 'cartelspacer',
      text:
        'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_190.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_190.jpg',
      ffg: 190,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Genesis Red',
      caption: 'Tansarii Point Crime Lord',
      initiative: 4,
      limited: 1,
      cost: 31,
      xws: 'genesisred',
      ability:
        'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_184.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_184.jpg',
      ffg: 184,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Inaldra',
      caption: 'Tansarii Point Boss',
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'inaldra',
      ability:
        'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_187.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_187.jpg',
      ffg: 187,
      hyperspace: true,
      epic: true,
    },
    {
      name: "Laetin A'shera",
      caption: "Car'das Enforcer",
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'laetinashera',
      ability:
        'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_185.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_185.jpg',
      ffg: 185,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Quinn Jast',
      caption: 'Fortune Seeker',
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'quinnjast',
      ability:
        'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_186.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_186.jpg',
      ffg: 186,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Serissu',
      caption: 'Flight Instructor',
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'serissu',
      ability:
        'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_183.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_183.jpg',
      ffg: 183,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Sunny Bounder',
      caption: 'Incurable Optimist',
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'sunnybounder',
      ability:
        'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_188.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_188.jpg',
      ffg: 188,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Tansarii Point Veteran',
      initiative: 3,
      limited: 0,
      cost: 29,
      xws: 'tansariipointveteran',
      text:
        "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_189.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
        slotOptions: ['Cannon', 'Torpedo', 'Missile'],
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_189.jpg',
      ffg: 189,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'G4R-G0R V/M',
      xws: 'g4rgorvm',
      initiative: 0,
      limited: 1,
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      caption: 'Tilted Droid',
      hyperspace: true,
      epic: true,
      slots: ['Modification'],
      ability:
        'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
      cost: 28,
      ffg: 636,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f1d43e799b5f829b40c091a2274e570f.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
    },
  ],
};

export default t;
