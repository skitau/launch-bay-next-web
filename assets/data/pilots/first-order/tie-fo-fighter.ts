import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/fo Fighter',
  xws: 'tiefofighter',
  ffg: 49,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2LR',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'First Order',
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
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEfo.png',
  pilots: [
    {
      name: '"Midnight"',
      caption: 'Omega Leader',
      initiative: 6,
      limited: 1,
      cost: 42,
      xws: 'midnight',
      ability:
        "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/c7994885b38757f92bdf3a98c37b3c96.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c6a43d25d22d4112dd7e968cab4eb3d5.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 397,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Commander Malarus',
      caption: 'First Order Enforcer',
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'commandermalarus',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/f7506ec739f5580d484ff0ee49b041f3.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d9cfa6aacc29d55a47aaa0d9f75d362e.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      charges: { value: 2, recovers: 0 },
      ffg: 452,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Scorch"',
      caption: 'Zeta Leader',
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'scorch',
      ability:
        'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/9dd11d408bb869cb947663fc29622833.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dd225b2dab46b921e622dca6d799591f.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 398,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Static"',
      caption: 'Omega Ace',
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'static',
      ability:
        'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/2481fe5d98026e086a901d83dbe87018.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/30e0837d4877df289c220ea0ae174078.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 399,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Longshot"',
      caption: 'Zeta Ace',
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'longshot',
      ability:
        'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d0e698f59696c15b60d7eaa1e2d51eeb.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/31ad38b2fc0d39f37ad82e1c70f62135.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 400,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Omega Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'omegasquadronace',
      text:
        'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/97e72d0f5dc8c2dd21a355e3258f37dd.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/4e5010f7b60902288dac36bf646dcde9.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 403,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Muse"',
      caption: 'Epsilon Leader',
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'muse',
      ability:
        'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/7de4e91de0906eb548bfe3a08a1b6abe.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d3f8b9baf0bbd8a7d2b785a616dacbcf.jpg',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 401,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'TN-3465',
      caption: 'Loose End',
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'tn3465',
      ability:
        "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/333cbf0da8849edb38c4e93944d8fe57.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/9fce0e75539a225e9ff1536e466c3c13.jpg',
      slots: ['Tech', 'Modification'],
      ffg: 453,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zeta Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'zetasquadronpilot',
      text:
        "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/be1062b6a7a8e4644223146342990a02.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d20d6cc2a052afc783d535c802874d23.jpg',
      slots: ['Tech', 'Modification'],
      ffg: 404,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Epsilon Squadron Cadet',
      initiative: 1,
      limited: 0,
      cost: 25,
      xws: 'epsilonsquadroncadet',
      text:
        "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/e911cd18f04225bbd36c48114b56f3cc.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/610cb198e4cda75aab0207841c6e4a87.jpg',
      slots: ['Tech', 'Modification'],
      ffg: 405,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Lieutenant Rivas',
      caption: 'Inconvenient Witness',
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'lieutenantrivas',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/7188ec2eb699261dbd47a15df6164f4c.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/66f969d008fc995bd940bf1ab647109f.jpg',
      ability:
        'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      slots: ['Tech', 'Modification'],
      ffg: 454,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Null"',
      caption: 'Epsilon Ace',
      initiative: 0,
      limited: 1,
      cost: 30,
      xws: 'null',
      ability: 'While you are not damaged, treat your initiative value as 7.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/79a9d780d3540647af1e057113869294.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/eb788d9622d096c6d96c96cf20dc1939.jpg',
      slots: ['Tech', 'Modification'],
      ffg: 402,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
