import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'JumpMaster 5000',
  xws: 'jumpmaster5000',
  ffg: 45,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NW',
    '2YR',
    '3LR',
    '3BB',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Jumpmaster.png',
  pilots: [
    {
      name: 'Contracted Scout',
      initiative: 2,
      limited: 0,
      cost: 41,
      xws: 'contractedscout',
      text:
        'Built for long-distance reconnaissance and plotting new hyperspace routes, the lightly armed JumpMaster 5000 is often extensively retrofitted with custom upgrades.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_217.png',
      slots: [
        'Torpedo',
        'Cannon',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_217.jpg',
      ffg: 217,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Dengar',
      caption: 'Vengeful Corellian',
      initiative: 6,
      limited: 1,
      cost: 53,
      xws: 'dengar',
      ability:
        'After you defend, if the attacker is in your [Front Arc], you may spend 1 [Charge] to perform a bonus attack against the attacker.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_214.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/da/feda9a2c-38f4-447a-8b0c-af7e04ace137/op067_dengar.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_214.jpg',
      ffg: 214,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Manaroo',
      caption: 'Graceful Aruzan',
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: 'manaroo',
      ability:
        'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, transfer all green tokens assigned to you to that ship.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_215.png',
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_215.jpg',
      ffg: 215,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Tel Trevura',
      caption: 'Escape Artist',
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'teltrevura',
      ability:
        'If you would be destroyed, you may spend 1 [Charge]. If you do, discard all of your damage cards, suffer 5 [Hit] damage, and place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of your player edge.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_216.png',
      charges: { value: 1, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_216.jpg',
      ffg: 216,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Nom Lumb',
      caption: 'On the Run',
      initiative: 1,
      limited: 1,
      cost: 38,
      xws: 'nomlumb',
      ability:
        'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_216.jpg',
      hyperspace: true,
      epic: true,
      ffg: 637,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
    },
  ],
};

export default t;
