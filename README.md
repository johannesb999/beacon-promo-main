# Beacon – Promo-Website

Dies ist die Kampagnen- und Promo-Website zu **Beacon**, einem Bachelorprojekt der
Studiengänge *Internet of Things* und *Kommunikationsgestaltung* an der
Hochschule für Gestaltung Schwäbisch Gmünd (Sommersemester 2026, von Johannes Biess,
Jannik Flaig und Aileen Kling).

## Was ist Beacon?

Beacon ist ein **digitales, lokales Hilfenetzwerk für den nächtlichen Heimweg**. Es
gibt diesen Moment, in dem ein vertrauter Weg fremd wird: Die Straße ist dieselbe wie
am Tag, aber sobald sie leer und dunkel ist, verschiebt sich das Gefühl – und man ist
plötzlich auf sich allein gestellt. Genau hier setzt Beacon an.

Der Name kommt vom Leuchtfeuer: einem Signal, das Orientierung gibt und Menschen zu
einem sicheren Ort weist. In der App funktioniert es so:

- Eine **Live-Karte** zeigt deinen Standort und die erreichbaren Beacons rund um dich.
- Ein **Hilfe-Knopf** wird leise gehalten und ausgelöst, sobald sich etwas falsch anfühlt.
- Eine **Route zum nächsten sicheren Ort** erscheint, Helfer und Safe Spots in der Nähe
  **leuchten auf** und signalisieren, dass sie unterwegs sind.
- Der Alarm lässt sich jederzeit mit *„Ich fühle mich sicher“* wieder abbrechen.

Ein „Beacon“ ist dabei jeder – oder jeder Ort –, der aufleuchtet, wenn jemand in der
Nähe Hilfe braucht. Das Netzwerk kennt drei Rollen: **Person** (private Helfende),
**Safespace** (ein nachts geöffneter Ort) und **Partner** (Institution oder Kooperation).

## Wozu diese Website?

Diese Website ist **Teil der Beacon-Kampagne**. Neben Plakaten und Roll-ups an
liminalen Orten – Bushaltestellen, Unterführungen, dort wo Menschen nachts auf dem
Heimweg vorbeikommen – trägt sie die Kampagne ins Digitale und sammelt die
Aufmerksamkeit an einem Ort, an dem aus Interesse Teilnahme wird. Sie erklärt das
Konzept in wenigen Schritten, führt über die App-Stores direkt zum Download und
spricht die drei Rollen gezielt getrennt an.

Vor allem aber macht sie **das Netzwerk sichtbar**: Ein Indikator zeigt, wie viele
Teilnehmer in deiner Umgebung bereits dabei sind. Das schafft Vertrauen und bringt
neue Mitglieder. Und damit löst die Website eine ganz konkrete Aufgabe – das
Cold-Start-Problem.

## Warum das Cold-Start-Problem überhaupt besteht

Ein Hilfsnetzwerk trägt erst, wenn von Beginn an genug Menschen mitmachen. Daraus
entsteht ein klassisches **Henne-Ei-Problem**:

> Ohne sichtbare Hilfe lädt niemand die App herunter – und ohne Nutzende entsteht keine
> sichtbare Hilfe.

Verschärft wird das durch den Zeitpunkt: Das Unsicherheitsfenster liegt zwischen etwa
21 und 3 Uhr, also genau dann, wenn die wenigsten potenziellen Helfenden wach,
erreichbar und unterwegs sind. Das Versprechen, Hilfe in einem Radius von 300 bis 500
Metern anzuzeigen, ist zum Start deshalb nicht einlösbar. Eine Karte, die nachts keine
erreichbaren Beacons zeigt, würde das Unsicherheitsgefühl sogar noch verstärken, weil
sie die soziale Isolation bestätigt, die sie eigentlich auflösen soll.

Der Lösungsweg läuft deshalb in Stufen:

1. **Grundnetzwerk aus festen Orten.** In der Pilotstadt Schwäbisch Gmünd werden zuerst
   Orte gewonnen, die nachts ohnehin geöffnet sind – Tankstellen, Fast-Food-Restaurants,
   Hotels –, gestützt auf Kooperationen mit bestehenden Strukturen wie Awareness-Teams,
   kommunalen Frauenreferaten und Hochschulen. So sieht die erste schutzsuchende Person
   erreichbare Hilfe, bevor sich ein einziger privater Helfer angemeldet hat.
2. **Breite Kampagne.** Sobald das Grundnetzwerk steht, holt eine breit angelegte
   Kampagne viele Menschen auf einmal ins Netzwerk – bis es eine **kritische Masse**
   erreicht und das eigentliche, dichtere Netz aus privaten Helfenden entsteht, die die
   Lücken zwischen den Orten füllen.

Diese Website ist der digitale Baustein dieser Kampagne: Sie sichtbar zu machen, wie
viel Hilfe schon in der Umgebung ist, ist der Hebel, mit dem aus einem leeren Netz ein
tragendes wird.

## Technik & Entwicklung

Die Seite ist mit **Nuxt 3 / Vue 3** gebaut und zweisprachig (DE / EN).

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver starten
npm run generate # statische Seite bauen
npm run preview  # Produktions-Build lokal ansehen
```

Für Deployment liegen ein `Dockerfile` sowie GitHub-Actions-Workflows
(`.github/workflows/`) bei.

---

> Hinweis: Beacon ist ein studentisches Bachelorprojekt und aktuell (vielleicht noch)
> nicht für den realen Einsatz gedacht.
