import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Advanced Sensors',
    limited: 0,
    xws: 'advancedsensors',
    sides: [
      {
        title: 'Advanced Sensors',
        type: 'Sensor',
        ability:
          'After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation.',
        slots: ['Sensor'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_23.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_23.jpg',
        ffg: 252,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Collision Detector',
    limited: 0,
    xws: 'collisiondetector',
    sides: [
      {
        title: 'Collision Detector',
        type: 'Sensor',
        ability:
          'While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 [Charge] to ignore its effects until the end of the round.',
        slots: ['Sensor'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_24.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_24.jpg',
        ffg: 253,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Fire-Control System',
    limited: 0,
    xws: 'firecontrolsystem',
    sides: [
      {
        title: 'Fire-Control System',
        type: 'Sensor',
        ability:
          'While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack.',
        slots: ['Sensor'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_25.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_25.jpg',
        ffg: 254,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Trajectory Simulator',
    limited: 0,
    xws: 'trajectorysimulator',
    sides: [
      {
        title: 'Trajectory Simulator',
        type: 'Sensor',
        ability:
          'During the System Phase, if you would drop or launch a bomb, you may launch it using the (5 [Straight]) template instead.',
        slots: ['Sensor'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_26.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_26.jpg',
        ffg: 255,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Passive Sensors',
    limited: 0,
    xws: 'passivesensors',
    sides: [
      {
        title: 'Passive Sensors',
        type: 'Sensor',
        ability:
          'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step.\n\nWhile your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
        charges: { value: 1, recovers: 1 },
        slots: ['Sensor'],
        ffg: 577,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/08a980b359fb73dbcb9a315e94d505f0.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 2,
        '1': 2,
        '2': 2,
        '3': 2,
        '4': 2,
        '5': 4,
        '6': 6,
        '7': 8,
        '8': 10,
      },
    },
    hyperspace: true,
    epic: true,
  },
];

export default t;
