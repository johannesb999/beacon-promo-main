/* =========================================================================
   Beacon promo — language toggle (DE / EN) + decorative QR codes
   ========================================================================= */

/* ----------------------------- i18n strings ----------------------------- */
const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.how': 'How it works',
    'nav.about': 'About Us',

    'hero.title': 'Help',
    'hero.sub': 'is closer than you think',
    'hero.already': 'Already',
    'hero.members': 'members in your area',
    'hero.howlink': 'How it Works',

    'reasons.title1': 'Reasons why',
    'reasons.title2': 'Beacon',
    'reasons.r1': 'Always a safe path',
    'reasons.r1d': 'Every hold maps the calmest route to the nearest safe spot.',
    'reasons.r2': "You're never alone",
    'reasons.r2d': 'Nearby Beacons light up and move toward you in real time.',
    'reasons.r3': 'Have a clear next step',
    'reasons.r3d': "A direction arrow always points you toward what's next.",
    'reasons.blurb': 'Beacon turns the people and places around you into a living safety net. One hold of a button quietly calls for help — and your neighbourhood lights up to guide you home.',

    'howto.title': 'How to Use',
    'howto.s1': 'See your surroundings',
    'howto.s1d': 'A live map shows your location and the Beacons reachable around you.',
    'howto.s2': 'Hold to activate help',
    'howto.s2d': 'The button arms quietly. A route to the best Spot appears, with alternatives and a direction arrow.',
    'howto.s3': 'Beacons light up',
    'howto.s3d': "Nearby helpers and Safe Spots are activated and signal that they're on the way.",
    'howto.s4': 'You get help',
    'howto.s4d': 'You recognize your helper by their blinking flashlight; your phones confirm the connection. Stop the alarm at any time with “I feel safe”.',

    'phone.reachable': 'reachable',
    'phone.estimate': 'estimate',
    'phone.cancel': 'Cancel the alarm any time',
    'phone.feelsafe': 'I feel safe',
    'phone.c1': 'Drag and hold to prepare a Beacon',
    'phone.c2': 'A route to the nearest Spot appears',
    'phone.c3': 'Nearby Beacons are on the way',
    'phone.c4': 'Stop any time — “I feel safe”',

    'join.title': 'Join Beacon and help',
    'join.lead': 'A Beacon is anyone — or anywhere — that lights up when someone nearby needs help. The network only works because real people choose to be part of it.',
    'join.please': 'Please help',
    'join.msg': 'A person in your area might need your help',
    'join.notnow': 'Not now',
    'join.iwill': 'I will help',

    'roles.person': 'As a Person',
    'roles.safespace': 'As a Safespace',
    'roles.partner': 'As a Partner',
    'roles.text': "Keep Beacon on at night. When someone close by feels unsafe and you're the best match, you're asked — gently — to help, and guided safely toward them.",

    'today.l1': 'Join Beacon',
    'today.l2': 'Today',

    'about.title': 'About US',
    'about.text': 'Dieses Projekt entstand als Bachelorarbeit der Studiengänge Internet of Things und ist (evtl. noch) nicht für den Realen gebrauch gedacht.',
    'about.btn': 'Bachelor Project',

    'legal': 'LEGAL NOTICE',
  },

  de: {
    'nav.home': 'Start',
    'nav.how': 'Wie es funktioniert',
    'nav.about': 'Über uns',

    'hero.title': 'Hilfe',
    'hero.sub': 'ist näher als du denkst',
    'hero.already': 'Bereits',
    'hero.members': 'Mitglieder in deiner Umgebung',
    'hero.howlink': 'Wie es funktioniert',

    'reasons.title1': 'Gründe für',
    'reasons.title2': 'Beacon',
    'reasons.r1': 'Immer ein sicherer Weg',
    'reasons.r1d': 'Jeder Halt zeigt die ruhigste Route zum nächsten sicheren Ort.',
    'reasons.r2': 'Du bist nie allein',
    'reasons.r2d': 'Beacons in der Nähe leuchten auf und kommen in Echtzeit zu dir.',
    'reasons.r3': 'Immer ein klarer nächster Schritt',
    'reasons.r3d': 'Ein Richtungspfeil zeigt dir immer, wohin es als Nächstes geht.',
    'reasons.blurb': 'Beacon verwandelt die Menschen und Orte um dich herum in ein lebendiges Sicherheitsnetz. Ein Halten der Taste ruft leise um Hilfe – und deine Nachbarschaft leuchtet auf, um dich nach Hause zu führen.',

    'howto.title': "So funktioniert's",
    'howto.s1': 'Sieh deine Umgebung',
    'howto.s1d': 'Eine Live-Karte zeigt deinen Standort und die Beacons in deiner Reichweite.',
    'howto.s2': 'Halten, um Hilfe zu aktivieren',
    'howto.s2d': 'Die Taste schärft sich leise. Eine Route zum besten Spot erscheint – mit Alternativen und Richtungspfeil.',
    'howto.s3': 'Beacons leuchten auf',
    'howto.s3d': 'Helfer und sichere Orte in der Nähe werden aktiviert und signalisieren, dass sie unterwegs sind.',
    'howto.s4': 'Du bekommst Hilfe',
    'howto.s4d': 'Du erkennst deinen Helfer an der blinkenden Taschenlampe; eure Handys bestätigen die Verbindung. Stoppe den Alarm jederzeit mit „Ich fühle mich sicher“.',

    'phone.reachable': 'erreichbar',
    'phone.estimate': 'Schätzung',
    'phone.cancel': 'Alarm jederzeit abbrechen',
    'phone.feelsafe': 'Ich fühle mich sicher',
    'phone.c1': 'Ziehen und halten, um einen Beacon vorzubereiten',
    'phone.c2': 'Eine Route zum nächsten Spot erscheint',
    'phone.c3': 'Beacons in der Nähe sind unterwegs',
    'phone.c4': 'Jederzeit stoppen – „Ich fühle mich sicher“',

    'join.title': 'Werde Teil von Beacon',
    'join.lead': 'Ein Beacon ist jeder – oder jeder Ort – der aufleuchtet, wenn jemand in der Nähe Hilfe braucht. Das Netzwerk funktioniert nur, weil echte Menschen sich entscheiden, Teil davon zu sein.',
    'join.please': 'Bitte hilf',
    'join.msg': 'Eine Person in deiner Nähe braucht vielleicht deine Hilfe',
    'join.notnow': 'Jetzt nicht',
    'join.iwill': 'Ich helfe',

    'roles.person': 'Als Person',
    'roles.safespace': 'Als Safespace',
    'roles.partner': 'Als Partner',
    'roles.text': 'Lass Beacon nachts an. Wenn sich jemand in der Nähe unsicher fühlt und du am besten passt, wirst du – behutsam – gefragt zu helfen und sicher zu der Person geführt.',

    'today.l1': 'Werde Teil von Beacon',
    'today.l2': 'Noch heute',

    'about.title': 'Über uns',
    'about.text': 'Dieses Projekt entstand als Bachelorarbeit der Studiengänge Internet of Things und ist (evtl. noch) nicht für den Realen gebrauch gedacht.',
    'about.btn': 'Bachelor Project',

    'legal': 'IMPRESSUM',
  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.setLang === lang);
  });
}

document.querySelectorAll('[data-set-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

/* --------------------- decorative QR-style code ---------------------
   Not a scannable QR — a faithful-looking placeholder (3 finder
   patterns + a deterministic module fill) so the layout matches the
   mockup. Swap for a real QR image when the store links are live.     */
function buildQR(host) {
  const N = 25;                 // module grid
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${N} ${N}`);
  svg.setAttribute('shape-rendering', 'crispEdges');

  const dark = getComputedStyle(document.documentElement)
    .getPropertyValue('--ink-900').trim() || '#242424';

  const isFinder = (x, y) => {
    const inBox = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
    return inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7);
  };

  // deterministic pseudo-random so both QRs render identically each load
  let seed = 1337;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;

  const add = (x, y, w = 1, h = 1) => {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('x', x); r.setAttribute('y', y);
    r.setAttribute('width', w); r.setAttribute('height', h);
    r.setAttribute('fill', dark);
    svg.appendChild(r);
  };

  // finder patterns: outer 7x7 ring + inner 3x3 dot
  [[0, 0], [N - 7, 0], [0, N - 7]].forEach(([ox, oy]) => {
    add(ox, oy, 7, 1); add(ox, oy + 6, 7, 1);
    add(ox, oy, 1, 7); add(ox + 6, oy, 1, 7);
    add(ox + 2, oy + 2, 3, 3);
  });

  // data modules, skipping the finder zones (with a 1-module quiet gap)
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (isFinder(x, y) || isFinder(x - 1, y) || isFinder(x, y - 1) || isFinder(x - 1, y - 1)) continue;
      if (rnd() > 0.55) add(x, y);
    }
  }
  host.appendChild(svg);
}

document.querySelectorAll('[data-qr]').forEach(buildQR);
