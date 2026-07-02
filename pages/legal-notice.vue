<template>
  <main class="legal-page">
    <div class="legal-page__inner">
      <NuxtLink class="legal-page__back" to="/">Zurueck</NuxtLink>

      <header class="legal-page__header">
        <p class="legal-page__eyebrow">Legal Notice</p>
        <h1>Muster-Impressum</h1>
        <p>
          Dieses Impressum ist ein Muster und muss vor Veroeffentlichung mit den echten Betreiber-, Adress- und Kontaktdaten ersetzt und rechtlich geprueft werden.
        </p>
      </header>

      <section class="legal-page__grid" aria-label="Impressum Angaben">
        <article>
          <h2>Angaben nach Paragraf 5 DDG</h2>
          <p>
            Beacon Bachelorprojekt<br />
            Vertreten durch: [Vorname Nachname]<br />
            [Strasse Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </article>

        <article>
          <h2>Kontakt</h2>
          <p>
            E-Mail: [email@example.com]<br />
            Telefon: [optional]<br />
            Website: [domain.de]
          </p>
        </article>

        <article>
          <h2>Verantwortlich fuer den Inhalt</h2>
          <p>
            [Vorname Nachname]<br />
            [Strasse Hausnummer]<br />
            [PLZ Ort]
          </p>
        </article>

        <article>
          <h2>Projektkontext</h2>
          <p>
            Diese Website praesentiert ein Bachelorprojekt der Hochschule fuer Gestaltung Schwaebisch Gmuend. Beacon ist aktuell ein Konzept- und Prototypenprojekt und nicht fuer den realen Notfallbetrieb bestimmt.
          </p>
        </article>
      </section>

      <section class="legal-page__copy" aria-label="Rechtliche Hinweise">
        <h2>Haftung fuer Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt. Fuer Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte wird jedoch keine Gewaehr uebernommen.
        </p>

        <h2>Haftung fuer Links</h2>
        <p>
          Diese Website kann Links zu externen Websites enthalten. Auf deren Inhalte haben wir keinen Einfluss; fuer diese Inhalte sind ausschliesslich die jeweiligen Anbieter verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website erstellten Inhalte, Texte, Bilder und Gestaltungselemente unterliegen dem Urheberrecht. Eine Nutzung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung der jeweiligen Rechteinhaber.
        </p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.legal-page {
  min-height: calc(100vh - 92px);
  background: var(--bg);
  color: var(--ink-900);
  padding: clamp(56px, 8vw, 108px) var(--edge) clamp(72px, 9vw, 120px);
}
.legal-page__inner {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}
.legal-page__back {
  display: inline-flex;
  align-items: center;
  margin-bottom: clamp(30px, 4vw, 52px);
  color: var(--gray-600);
  font-size: 14px;
  font-weight: 600;
}
.legal-page__back:hover {
  color: var(--orange);
}
.legal-page__header {
  max-width: 760px;
  margin-bottom: clamp(34px, 5vw, 58px);
}
.legal-page__eyebrow {
  color: var(--orange);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.legal-page h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0;
  margin-bottom: 18px;
}
.legal-page__header p,
.legal-page p {
  color: var(--ink-800);
  font-size: 16px;
  line-height: 1.6;
}
.legal-page__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(22px, 3vw, 38px) clamp(34px, 5vw, 72px);
  padding-top: clamp(28px, 4vw, 46px);
  border-top: 1px solid var(--gray-200);
}
.legal-page article,
.legal-page__copy {
  min-width: 0;
}
.legal-page h2 {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  margin-bottom: 8px;
}
.legal-page__copy {
  display: grid;
  gap: 8px;
  max-width: 82ch;
  margin-top: clamp(34px, 5vw, 58px);
}
.legal-page__copy p + h2 {
  margin-top: 16px;
}

@media (max-width: 760px) {
  .legal-page__grid {
    grid-template-columns: 1fr;
  }
  .legal-page h1 {
    font-size: 40px;
  }
}
</style>