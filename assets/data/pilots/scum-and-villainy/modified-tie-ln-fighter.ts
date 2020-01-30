import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Modified TIE/ln Fighter',
  xws: 'modifiedtielnfighter',
  ffg: 56,
  size: 'Small',
  dial: [
    '1TW',
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
    '5FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_MiningGuild_TIE.png',
  pilots: [
    {
      name: 'Ahhav',
      caption: 'Vengeful Survivor',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'ahhav',
      ability:
        'While you defend or perform an attack, if the enemy ship is a larger size than you, roll 1 additional die.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d58a0696c8d85a63e90eb8a1e522a54c.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2d162fae88ae58b9eca31f7dc0b7a9da.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 442,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Captain Seevor',
      caption: 'Noisy Nuisance',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'captainseevor',
      ability:
        "While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship's [Bullseye Arc], you may spend 1 [Charge]. If you do, the enemy ship gains 1 jam token.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/70b64586cc2eb05d10efc7ba8dfd69d0.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6ead4bbfa14075a19972dc57b90a34e1.jpg',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      slots: ['Talent', 'Modification'],
      ffg: 443,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Foreman Proach',
      caption: 'Slave Driver',
      initiative: 4,
      limited: 1,
      cost: 32,
      xws: 'foremanproach',
      ability:
        'Before you engage, you may choose 1 enemy ship in your [Bullseye Arc] at range 1-2 and gain 1 disarm token. If you do, that ship gains 1 tractor token.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/cfb3b5fa9d747afc3aa10f3b86f45818.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f789aa53866112fc44fd27ed9e177993.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 441,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Mining Guild Surveyor',
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'miningguildsurveyor',
      text:
        'With Imperial construction projects consuming raw materials at an unprecedented rate, the Mining Guild ruthlessly exploits newly discovered deposits of doonium ore on worlds such as Batonn, Lothal, and Umbara.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/3e5872dea32f2015bb6737592c21efaf.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ad058d0b6d46f668f06bf0007207a30a.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 445,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Overseer Yushyn',
      caption: 'Overbearing Boss',
      initiative: 2,
      limited: 1,
      cost: 26,
      xws: 'overseeryushyn',
      ability:
        'Before a friendly ship at range 1 would gain a disarm token, if that ship is not stressed, you may spend 1 [Charge]. If you do, that ship gains 1 stress token instead.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      charges: { value: 1, recovers: 1 },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/6c9268d3e6cc6b671d6db6ac39fcad0f.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1f454eb7c12b572103e59a9a782c3f50.jpg',
      slots: ['Modification'],
      ffg: 444,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Mining Guild Sentry',
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'miningguildsentry',
      text:
        'As part of its arrangement with the Empire, the Mining Guild receives modified TIE/ln Fighters to protect its operations. These craft have solar panels removed from their stabilizers for improved visibility, and feature more extensive life support systems for the benefit of their corporate pilots.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/6d67112b15c3c97bd3d4acf2c8d000ed.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/09c955b8008750a30fe398c200431160.jpg',
      slots: ['Modification'],
      ffg: 446,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
