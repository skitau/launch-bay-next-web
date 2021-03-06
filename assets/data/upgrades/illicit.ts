import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'cloakingdevice',
    sides: [
      {
        title: {
          en: 'Cloaking Device',
          de: 'Tarngerät',
          fr: "Appareil d'Occultation",
          es: 'Dispositivo de camuflaje',
          it: 'Dispositivo Occultante',
          pl: 'System maskowania',
          pt: 'Dispositivo de Camuflagem',
          zh: 'Cloaking Device',
        },
        type: 'Illicit',
        ability: {
          en:
            'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
          de:
            'Aktion: Gib 1 [Charge] aus, um eine [Cloak]-Aktion durchzuführen. Zu Beginn der Planungsphase wirf 1 Angriffswürfel. Bei einem [Focus]-Ergebnis, enttarne dich oder lege deinen Tarnungsmarker ab.',
          es:
            'Acción: Gasta 1 [Charge] para realizar una acción [Cloak]. Al comienzo de la fase de Planificación, tira 1 dado de ataque, Si sacas un resultado [Focus], desactiva el camuflaje o descarta tu ficha de Camuflaje.',
          fr:
            "Action : dépensez 1 [Charge] pour effectuer une action [Cloak]. Au début de la phase de préparation, lancez 1 dé d'attaque. Sur un résultat [Focus], désoccultez-vous ou défaussez votre marqueur d'occultation.",
          it:
            "Azione: Spendi 1 [Charge] per effettuare 1 azione [Cloak]. All'inizio della Fase di Pianificazione, tira 1 dado di attacco. Con un risultato [Focus], deoccultati o scarta il tuo segnalino occultamento.",
          pl:
            'Akcja: Wydaj 1 [Charge] aby wykonać akcję [Cloak]. Na początku fazy planowania rzuć 1 kością ataku. Jeżeli wypadnie [Focus], wyłącz maskowanie albo odrzuć swój żeton maskowania.',
          pt:
            'Ação: Gaste 1 [Charge] para realizar uma ação [Cloak]. No início da Fase de Planejamento, role 1 dado de ataque. Em um resultado [Focus], descamufle ou descarte sua ficha de camuflagem.',
          zh:
            'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_57.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/41c853af396acea40b0d6fed11b056a2.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_57.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/20c9e63ca9aa036ad38e8f353fa34468.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/389ae84fcde148440e083cec6e74fa69.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/3724dfa53f9ca7fd42bdd5411d107c24.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/e7bb5022f824351764d5b3117dca7d60.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_57.png',
        },
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_57.jpg',
        ffg: 286,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'contrabandcybernetics',
    sides: [
      {
        title: {
          en: 'Contraband Cybernetics',
          de: 'Illegale Kybernetik',
          fr: 'Cybernétique de Contrebande',
          es: 'Ciberimplantes ilícitos',
          it: 'Cibernetica di Contrabbando',
          pl: 'Cybernetyka z kontrabandy',
          pt: 'Cibernética Ilegal',
          zh: 'Contraband Cybernetics',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
          de:
            'Bevor du aktiviert wirst, darfst du 1 [Charge] ausgeben. Falls du das tust, kannst du bis zum Ende der Runde Aktionen durchführen und rote Manöver ausführen, auch solange du gestresst bist.',
          es:
            'Antes de que te actives, puedes gastar 1 ficha [Charge]. Si lo haces, hasta el final de la ronda, eres capaz de realizar acciones y ejecutar maniobras rojas, incluso aunque estés bajo tensión.',
          fr:
            "Avant votre activation, vous pouvez dépenser 1 [Charge]. Dans ce cas, jusqu'à la fin du round, vous pouvez effectuer des actions et exécuter des manœuvres rouges, même si vous êtes stressé.",
          it:
            'Prima di attivarti, puoi spendere 1 [Charge]. Se lo fai, fino alla fine del round puoi effettuare azioni ed eseguire manovre rosse anche mentre sei in tensione.',
          pl:
            'Zanim się aktywujesz, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, do końca rundy możesz wykonywać akcje i czerwone manewry nawet wtedy, gdy posiadasz żeton strasu.',
          pt:
            'Antes de ativar, você pode gastar 1 [Charge]. Se fizer isso, até o final da rodada, você consegue realizar ações e executar manobras vermelhas mesmo se estiver estressado.',
          zh:
            'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_58.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/7e224494ca890f92cbff442c450c94dd.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_58.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/3d52fcc6b9e3a00b4232e320b3987169.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/7b2c2ad3a910b550c0c5e2a3dfb46ab1.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/8baa805948a0a99382330b81849476a7.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/b81e776b58872db0c9a4d871fb57bf33.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_58.png',
        },
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_58.jpg',
        ffg: 287,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'deadmansswitch',
    sides: [
      {
        title: {
          en: "Deadman's Switch",
          de: 'Totmannschalter',
          fr: 'Salve Automatique',
          es: 'Dispositivo de represalia',
          it: "Dispositivo dell'Uomo Morto",
          pl: 'Automatyczny detonator',
          pt: 'Dispositivo de Homem-Morto',
          zh: "Deadman's Switch",
        },
        type: 'Illicit',
        ability: {
          en:
            'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
          de:
            'Nachdem du zerstört worden bist, erleidet jedes andere Schiff in Reichweite 0-1 1 [Hit]-Schaden.',
          es:
            'Después de que seas destruido, toda otra nave que tienes a alcance 0-1 sufre 1 de daño [Hit].',
          fr:
            'Après que vous avez été détruit, chaque autre vaisseau à portée 0-1 subit 1 dégât [Hit].',
          it:
            'Dopo che sei stato distrutto, ogni altra nave a gittata 0-1 subisce 1 danno [Hit].',
          pl:
            'Gdy zostaniesz zniszczony, każdy statek w zasięgu (0-1) przyjmuje 1 uszkodzenie [Hit].',
          pt:
            'Após ser destruído, cada outra nave em alcance 0-1 sofre 1 dano [Hit].',
          zh:
            'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_59.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/c3a3ed6162f8c0daab8e204442706a6d.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_59.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/13a879220b44683e8ed9853047c20a13.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/2f6a5a28976eecf5f6deefd72c6ef32a.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/3945fc4efeae96047fe9037da9ff6623.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/fedd3a2e34a112b8e33bbff3f0f2296c.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_59.png',
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_59.jpg',
        ffg: 288,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'feedbackarray',
    sides: [
      {
        title: {
          en: 'Feedback Array',
          de: 'Rückkopplungsfeld',
          fr: 'Dispositif de Retour',
          es: 'Transmisor de sobrecargas',
          it: 'Apparato di Feedback',
          pl: 'System sprzężenia zwrotnego',
          pt: 'Matriz de Retorno',
          zh: 'Feedback Array',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
          de:
            'Bevor du kämpfst, darfst du 1 Ionenmarker und 1 Entwaffnet-Marker erhalten. Falls du das tust, erleidet jedes Schiff in Reichweite 0 1 [Hit]-Schaden.',
          es:
            'Antes de que intervengas, puedes recibir 1 ficha de Iones y 1 ficha de Desarme. Si lo haces, toda nave que tengas a alcance 0 sufre 1 de daño [Hit].',
          fr:
            'Avant de vous engager, vous pouvez gagner 1 marqueur ionique et 1 marqueur de désarmement. Dans ce cas, chaque vaisseau à portée 0 subit 1 dégât [Hit].',
          it:
            'Prima di ingaggiare, puoi ottenere 1 segnalino ioni e 1 segnalino disarmo. Se lo fai, ogni nave a gittata 0 subisce 1 danno [Hit].',
          pl:
            'Zanim zaczniesz walkę, możesz otrzymać 1 żeton jonizacji i 1 żeton rozbrojenia. Jeżeli tak zrobisz, to każdy statek w zasięgu 0 przyjmuje 1 uszkodzenie [Hit].',
          pt:
            'Antes de engajar, você podereceber 1 ficha de íon e1 ficha de desarmamento.Se você fizer isso, cada naveem alcance 0 sofre 1 dano [Hit].',
          zh:
            'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_60.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/b8e8d3d43a1774c00c877b8cb86270e2.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_60.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/a5c214dca39be3d89df7745bc2e694b7.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/8227df858ea5aa68ddaf59ef437140bb.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/a2f4f4ca09a90328f476382f88842c75.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/80f2559024eb2d8d3f4093ebc3de2696.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_60.png',
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_60.jpg',
        ffg: 289,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'inertialdampeners',
    sides: [
      {
        title: {
          en: 'Inertial Dampeners',
          de: 'Trägheitsdämpfer',
          fr: 'Amortisseurs Inertiels',
          es: 'Amortiguadores de inercia',
          it: 'Ammortizzatori Inerziali',
          pl: 'Tłumiki inercyjne',
          pt: 'Amortecedores Inerciais',
          zh: '惯性阻尼器',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white (0 [Stationary]) instead of the maneuver you revealed, then gain 1 stress token.',
          de:
            'Bevor du ein Manöver ausführen würdest, darfst du 1 Schild ausgeben. Falls du das tust, führe anstatt des Manövers, das du aufgedeckt hast, ein weißes (0 [Stationary])-Manöver aus, dann erhalte 1 Stressmarker.',
          es:
            'Antes de que vayas a ejecutar una maniobra, puedes gastar 1 escudo. Si lo haces, ejecutas una maniobra (0 [Stationary]) blanca en vez de la maniobra que has revelado, y luego recibes 1 ficha de Tensión.',
          fr:
            "Avant d'exécuter une manœuvre, vous pouvez dépenser 1 bouclier. Dans ce cas, exécutez une manœuvre (0 [Stationary]) blanche à la place de celle que vous avez révélée, puis gagnez 1 marqueur de stress.",
          it:
            'Prima che tu stia per eseguire una manovra, puoi spendere 1 scudo. Se lo fai, esegui una manovra (0 [Stationary]) bianca invece della manovra che hai rivelato, poi ottieni 1 segnalino tensione.',
          pl:
            'Przed wykonaniem manewru możesz wydać 1 osłonę. Jeżeli tak zrobisz, zamiast odsłoniętego manewru wykonujesz biały (0 [Stationary]), a następnie otrzymujesz 1 żeton stresu.',
          pt:
            'Antes de executar uma manobra, você pode gastar 1 escudo. Se fizer isso, execute uma manobra (0 [Stationary]) brancaem vez da manobra que você revelou e,então, receba 1 ficha de estresse.',
          zh:
            '在你将执行移动前，你可以花费1个护盾。如果你如此做，不执行操作盘上展示的移动，而是执行白色(0[Stationary])，然后获得1枚压力标记。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_61.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/955d065d0b309d9911239a18c3452f32.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_61.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/43eaa5d5a8fc684b27eff3446ceebcb7.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/24ac20cc2c83b1e5a00a4aa324abaf36.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/b0d317af47c1e9e7d317d7ae8f78fef7.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/8f778eed5a6bbd7ce86b599392dab4a9.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_61.png',
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_61.jpg',
        ffg: 290,
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
      },
    },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'riggedcargochute',
    sides: [
      {
        title: {
          en: 'Rigged Cargo Chute',
          de: 'Manipulierte Frachtrampe',
          fr: 'Largage de Cargaison',
          es: 'Tolva de evacuación de carga',
          it: 'Rampa di Carico Attrezzata',
          pl: 'Sprzężona rampa ładunkowa',
          pt: 'Ejetor de Carregamento',
          zh: '搭建货物滑槽',
        },
        type: 'Illicit',
        ability: {
          en:
            'Action: Spend 1 [Charge]. Drop 1 loose cargo using the (1 [Straight]) template.',
          de:
            'Aktion: Gib 1 [Charge] aus. Wirf unter Verwendung der (1 [Straight])-Schablone 1 freie Fracht ab.',
          es:
            'Acción: Gasta 1 [Charge]. Suelta 1 Cargamento expulsado utilizando la plantilla (1 [Straight]).',
          fr:
            'Action : dépensez 1 [Charge]. Larguez 1 cargaison égarée en utilisant le gabarit (1 [Straight]).',
          it:
            'Azione: Spendi 1 [Charge]. Sgancia 1 carico sparso usando il modello (1 [Straight]).',
          pl:
            'Akcja: Wydaj 1 [Charge]. Wyrzuć 1 zbędny towar za pomocą wzornika (1 [Straight]).',
          pt:
            'Ação: Gaste 1 [Charge].Solte 1 carregamento solto usando o gabarito (1 [Straight]).',
          zh: '行动：花费1[Charge]。使用(1[Straight])移动条投下1个散装货物。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_62.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/53b7e76a3165c4471abb960e9b3c4f4f.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_62.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/9dffe968f396e3f3cc808afd3bacd35b.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/d0b7f32da4a279c46e95192e78bb5dd7.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/fab324baf8c986f7fa8a7600ea355ec3.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/6b452e0e173ebf38a2134bf6a50f5c53.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_62.png',
        },
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Loose Cargo',
          type: 'Obstacle',
          effect: 'Loose cargo is a debris cloud.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_62.jpg',
        ffg: 291,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'coaxiumhyperfuel',
    sides: [
      {
        title: {
          en: 'Coaxium Hyperfuel',
          de: 'Coaxium-Hypertreibstoff',
          fr: 'Hypercarburant Coaxium',
          es: 'Hipercombustible coaxium',
          it: 'Coaxium Hyperfuel',
          pl: 'Coaxium Hyperfuel',
          pt: 'Coaxium Hyperfuel',
          zh: 'Coaxium Hyperfuel',
        },
        type: 'Illicit',
        ability: {
          en:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
          de:
            'Du kannst die [Slam]-Aktion durchführen, auch solange du gestresst bist. Falls du das tust, erleidest du 1 [Critical Hit]-Schaden, es sei denn, du legst 1 deiner Schadenskarten offen. Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 deiner Schadenskarten offenlegen oder 1 [Critical Hit]-Schaden erleiden, um eine [Slam]-Aktion durchzuführen.',
          es:
            'Eres capaz de realizar la acción [Slam] incluso aunque estés bajo tensión. Si la realizas, sufres 1 de daño [Critical Hit] a menos que expongas 1 de tus cartas de Daño. Después de que ejecutes parcialmente una maniobra, puedes exponer 1 de tus cartas de Daño o sufrir 1 de daño [Critical Hit] para realizar una acción [Slam].',
          fr:
            "Vous pouvez effectuer l'action [Slam], même si vous êtes stressé. Dans ce cas, vous subissez 1 dégât [Critical Hit] à moins que vous n'exposiez 1 de vos cartes de dégât. Après avoir partiellement exécuté une manœuvre, vous pouvez exposer 1 de vos cartes de dégât ou subir 1 dégât [Critical Hit] pour effectuer une action [Slam].",
          it:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
          pl:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
          pt:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
          zh:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
        },
        slots: ['Illicit'],
        ffg: 650,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/2159f59c78a5785be5d200e50047c254.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/8f55f3258eb4dc25c53d9dba11869415.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/12c218fcef1cbdb60fa270c42f1f154d.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
        },
      },
    ],
    cost: { value: 2 },
    restrictions: [{ action: { type: 'SLAM' } }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'quickreleaselocks',
    sides: [
      {
        title: { en: 'Quick-Release Locks' },
        type: 'Illicit',
        ability: {
          en:
            "During the System Phase, you may spend 1 [Charge] to place 1 cargo crate drift in your [Rear Arc] at range 0. It cannot overlap a ship this way. This card's [Charge] cannot be recovered.",
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'saboteursmap',
    sides: [
      {
        title: { en: "Saboteur's Map" },
        type: 'Illicit',
        ability: {
          en:
            'At the end of Setup, you may spend up to 1 [Charge] from each of your equipped <strong>Mine</strong> upgrades to place the corresponding device in the play area beyond range 2 of any enemy ship or other device.',
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'scannerbaffler',
    sides: [
      {
        title: { en: 'Scanner Baffler' },
        type: 'Illicit',
        ability: {
          en:
            'At the end of Setup, you may choose up to six other friendly, standard ships in your deployment area at range 0-1. If you do, place those ships anywhere at range 0-1.',
        },
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
];

export default t;
