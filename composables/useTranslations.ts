/* =========================================================================
   Beacon promo — language state (DE / EN).
   Replaces the old imperative DOM walk: the active locale lives in shared
   Nuxt state, components call t('key') and re-render reactively on switch.
   ========================================================================= */

export type Locale = 'en' | 'de'

const I18N: Record<Locale, Record<string, string>> = {
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
    'reasons.r1': "You're not alone",
    'reasons.r1d': 'See in real time how much help surrounds you.',
    'reasons.r2': 'Help in one move.',
    'reasons.r2d': 'Call it silently, the moment something feels off.',
    'reasons.r3': 'No one looks away.',
    'reasons.r3d': 'Strangers nearby become people who show up.',
    'reasons.blurb':
      'Beacon turns the people and places around you into a living safety net. One hold of a button quietly calls for help — and your neighbourhood lights up to guide you home.',

    'howto.title': 'How to Use',
    'howto.s1': 'See your surroundings',
    'howto.s1d': 'A live map shows your location and the Beacons reachable around you.',
    'howto.s2': 'Hold to activate help',
    'howto.s2d':
      'The button arms quietly. A route to the best Spot appears, with alternatives and a direction arrow.',
    'howto.s3': 'Beacons light up',
    'howto.s3d': "Nearby helpers and Safe Spots are activated and signal that they're on the way.",
    'howto.s4': 'You get help',
    'howto.s4d':
      'You recognize your helper by their blinking flashlight; your phones confirm the connection. Stop the alarm at any time with “I feel safe”.',

    'phone.reachable': 'reachable',
    'phone.estimate': 'estimate',
    'phone.cancel': 'Cancel the alarm any time',
    'phone.feelsafe': 'I feel safe',
    'phone.c1': 'Drag and hold to prepare a Beacon',
    'phone.c2': 'A route to the nearest Spot appears',
    'phone.c3': 'Nearby Beacons are on the way',
    'phone.c4': 'Stop any time — “I feel safe”',

    'join.title': 'Join Beacon and help',
    'join.lead':
      'A Beacon is anyone — or anywhere — that lights up when someone nearby needs help. The network only works because real people choose to be part of it.',
    'join.please': 'Please help',
    'join.msg': 'A person in your area might need your help',
    'join.notnow': 'Not now',
    'join.iwill': 'I will help',

    'roles.person': 'As a Person',
    'roles.safespace': 'As a Safespace',
    'roles.partner': 'As a Partner',
    'roles.text':
      "Keep Beacon on at night. When someone close by feels unsafe and you're the best match, you're asked — gently — to help, and guided safely toward them.",

    'today.l1': 'Join Beacon',
    'today.l2': 'Today',

    'about.title': 'About US',
    'about.lead1':
      'This project was developed as a bachelor’s thesis for the Internet of Things and Communication Design degree programmes at the ',
    'about.school': 'Hochschule für Gestaltung Schwäbisch Gmünd',
    'about.lead2': 'Right now it´s not (perhaps not yet) intended for real-world use.',
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
    'reasons.r1': 'Du bist nicht allein',
    'reasons.r1d': 'Sieh in Echtzeit, wie viel Hilfe dich umgibt.',
    'reasons.r2': 'Hilfe mit einer Bewegung.',
    'reasons.r2d': 'Rufe leise Hilfe, sobald sich etwas falsch anfuehlt.',
    'reasons.r3': 'Niemand schaut weg.',
    'reasons.r3d': 'Fremde in deiner Naehe werden zu Menschen, die auftauchen.',
    'reasons.blurb':
      'Beacon verwandelt die Menschen und Orte um dich herum in ein lebendiges Sicherheitsnetz. Ein Halten der Taste ruft leise um Hilfe – und deine Nachbarschaft leuchtet auf, um dich nach Hause zu führen.',

    'howto.title': "So funktioniert's",
    'howto.s1': 'Sieh deine Umgebung',
    'howto.s1d': 'Eine Live-Karte zeigt deinen Standort und die Beacons in deiner Reichweite.',
    'howto.s2': 'Halten, um Hilfe zu aktivieren',
    'howto.s2d':
      'Die Taste schärft sich leise. Eine Route zum besten Spot erscheint – mit Alternativen und Richtungspfeil.',
    'howto.s3': 'Beacons leuchten auf',
    'howto.s3d':
      'Helfer und sichere Orte in der Nähe werden aktiviert und signalisieren, dass sie unterwegs sind.',
    'howto.s4': 'Du bekommst Hilfe',
    'howto.s4d':
      'Du erkennst deinen Helfer an der blinkenden Taschenlampe; eure Handys bestätigen die Verbindung. Stoppe den Alarm jederzeit mit „Ich fühle mich sicher“.',

    'phone.reachable': 'erreichbar',
    'phone.estimate': 'Schätzung',
    'phone.cancel': 'Alarm jederzeit abbrechen',
    'phone.feelsafe': 'Ich fühle mich sicher',
    'phone.c1': 'Ziehen und halten, um einen Beacon vorzubereiten',
    'phone.c2': 'Eine Route zum nächsten Spot erscheint',
    'phone.c3': 'Beacons in der Nähe sind unterwegs',
    'phone.c4': 'Jederzeit stoppen – „Ich fühle mich sicher“',

    'join.title': 'Werde Teil von Beacon',
    'join.lead':
      'Ein Beacon ist jeder – oder jeder Ort – der aufleuchtet, wenn jemand in der Nähe Hilfe braucht. Das Netzwerk funktioniert nur, weil echte Menschen sich entscheiden, Teil davon zu sein.',
    'join.please': 'Bitte hilf',
    'join.msg': 'Eine Person in deiner Nähe braucht vielleicht deine Hilfe',
    'join.notnow': 'Jetzt nicht',
    'join.iwill': 'Ich helfe',

    'roles.person': 'Als Person',
    'roles.safespace': 'Als Safespace',
    'roles.partner': 'Als Partner',
    'roles.text':
      'Lass Beacon nachts an. Wenn sich jemand in der Nähe unsicher fühlt und du am besten passt, wirst du – behutsam – gefragt zu helfen und sicher zu der Person geführt.',

    'today.l1': 'Werde Teil von Beacon',
    'today.l2': 'Noch heute',

    'about.title': 'Über uns',
    'about.lead1':
      'Dieses Projekt entstand als Bachelorarbeit der Studiengänge Internet of Things und Kommunikationsgestaltung an der ',
    'about.school': 'Hochschule für Gestaltung Schwäbisch Gmünd',
    'about.lead2': 'Aktuell ist es (vielleicht noch) nicht für den realen Einsatz gedacht.',
    'about.btn': 'Bachelor Project',

    'legal': 'IMPRESSUM',
  },
}

export const useTranslations = () => {
  const locale = useState<Locale>('locale', () => 'en')

  const setLang = (lang: Locale) => {
    locale.value = lang
    if (import.meta.client) document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const dict = I18N[locale.value] ?? I18N.en
    return dict[key] ?? key
  }

  return { locale, setLang, t }
}

