import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'ARC-170 Starfighter',
  xws: 'arc170starfighter',
  size: 'Medium',
  ffg: 31,
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: '"Sinker"',
      caption: 'Wolfpack Veteran',
      initiative: 3,
      limited: 1,
      xws: 'sinker',
      ability:
        'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/8297fc7d58ec0a5e6068f8dabbbc00f1.png',
      slots: ['Torpedo', 'Astromech', 'Crew', 'Gunner', 'Modification'],
      hyperspace: false,
      epic: true,
      cost: 54,
      ffg: 526,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/04b3e18c19a0843f89353949c9ffcb77.jpg',
    },
    {
      name: '"Jag"',
      xws: 'jag',
      cost: 48,
      slots: ['Torpedo', 'Astromech', 'Crew', 'Gunner', 'Modification'],
      ffg: 525,
      caption: 'CT-55/11-9009',
      initiative: 3,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/124b11dde89cf986fcd8bc8e89094cf5.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/28152f1d6ee09d27a4afd2459947dc3d.png',
      ability:
        'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Odd Ball"',
      xws: 'oddball-arc170starfighter',
      cost: 51,
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Crew',
        'Gunner',
        'Modification',
      ],
      ffg: 523,
      caption: 'CC-2237',
      initiative: 5,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/597ace7e901187c88d9ff75bb34a1301.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/b0e39e35b57982a9cdffe663ff47b2dc.png',
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Wolffe"',
      xws: 'wolffe',
      cost: 50,
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Crew',
        'Gunner',
        'Modification',
      ],
      ffg: 524,
      caption: 'CC-3636',
      initiative: 4,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/933ef28f6a8fda0c5741bd6a9a5f308d.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/2a15fd003a7fc1d475b562a958c6c263.png',
      charges: { value: 1, recovers: 0 },
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      hyperspace: true,
      epic: true,
    },
    {
      name: '104th Battalion Pilot',
      xws: '104thbattalionpilot',
      cost: 42,
      slots: ['Torpedo', 'Astromech', 'Crew', 'Gunner', 'Modification'],
      ffg: 528,
      initiative: 2,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5081daee997a2a55de474dad2e8e4a07.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/1798ea30f603f073200326864ef9424c.png',
      text:
        "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Squad Seven Veteran',
      xws: 'squadsevenveteran',
      cost: 44,
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Crew',
        'Gunner',
        'Modification',
      ],
      ffg: 527,
      initiative: 3,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3c9cad4a6c8cdb6a7749a76e1b42ec23.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/0e0fb59b2806b41214275255986965f2.png',
      text:
        'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
      hyperspace: true,
      epic: true,
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png',
};

export default t;
