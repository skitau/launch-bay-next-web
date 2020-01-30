import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Fang Fighter',
  xws: 'fangfighter',
  ffg: 36,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FangFighter.png',
  pilots: [
    {
      name: 'Fenn Rau',
      caption: 'Skull Leader',
      initiative: 6,
      limited: 1,
      cost: 68,
      xws: 'fennrau',
      ability:
        'While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_155.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_155.jpg',
      ffg: 155,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Joy Rekkoff',
      caption: 'Skull Squadron Ace',
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'joyrekkoff',
      ability:
        'While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_157.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_157.jpg',
      ffg: 157,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Kad Solus',
      caption: 'Skilled Commando',
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'kadsolus',
      ability: 'After you fully execute a red maneuver, gain 2 focus tokens.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_158.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_158.jpg',
      ffg: 158,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Old Teroch',
      caption: 'Mandalorian Mentor',
      initiative: 5,
      limited: 1,
      cost: 56,
      xws: 'oldteroch',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_156.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_156.jpg',
      ffg: 156,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Skull Squadron Pilot',
      initiative: 4,
      limited: 0,
      cost: 47,
      xws: 'skullsquadronpilot',
      text:
        "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_159.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_159.jpg',
      ffg: 159,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zealous Recruit',
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'zealousrecruit',
      text:
        "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_160.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_160.jpg',
      ffg: 160,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
