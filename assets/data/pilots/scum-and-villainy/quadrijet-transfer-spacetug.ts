import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Quadrijet Transfer Spacetug',
  xws: 'quadrijettransferspacetug',
  ffg: 9,
  size: 'Small',
  dial: [
    '1AR',
    '1DR',
    '1TW',
    '1BW',
    '1FW',
    '1NW',
    '1YW',
    '2SR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Quadjumper.png',
  pilots: [
    {
      name: 'Constable Zuvio',
      caption: 'Missing Sheriff of Niima Outpost',
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'constablezuvio',
      ability:
        'If you would drop a device, you may launch it using a (1 [Straight]) template instead.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_161.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text:
          'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Talent', 'Tech', 'Crew', 'Device', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_161.jpg',
      ffg: 161,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Jakku Gunrunner',
      initiative: 1,
      limited: 0,
      cost: 30,
      xws: 'jakkugunrunner',
      text:
        'The Quadrijet transfer spacetug, commonly called a "Quadjumper," is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_164.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text:
          'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Tech', 'Crew', 'Device', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_164.jpg',
      ffg: 164,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Sarco Plank',
      caption: 'The Scavenger',
      initiative: 2,
      limited: 1,
      cost: 32,
      xws: 'sarcoplank',
      ability:
        'While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_162.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text:
          'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Tech', 'Crew', 'Device', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_162.jpg',
      ffg: 162,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Unkar Plutt',
      caption: 'Miserly Portion Master',
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'unkarplutt',
      ability:
        'At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_163.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text:
          'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Tech', 'Crew', 'Device', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_163.jpg',
      ffg: 163,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
