<script setup lang="ts">
useHead({ title: 'Impressum — Beacon' })
</script>

<template>
  <main class="legal-page">
    <div class="legal-page__inner">
      <NuxtLink class="legal-page__back" to="/">Zurück</NuxtLink>

      <header class="legal-page__header">
        <p class="legal-page__eyebrow">Legal Notice</p>
        <h1>Impressum</h1>
      </header>

      <section class="legal-page__grid" aria-label="Impressum Angaben">
        <article>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Johannes Biess<br />
            Goethestraße 35<br />
            73525 Schwäbisch Gmünd<br />
            Deutschland
          </p>
        </article>

        <article>
          <h2>Kontakt</h2>
          <p>
            E-Mail:
            <a href="mailto:work.biessjohannes@gmail.com">work.biessjohannes@gmail.com</a><br />
            Website: beacon-online.de
          </p>
        </article>

        <article>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Johannes Biess<br />
            Goethestraße 35<br />
            73525 Schwäbisch Gmünd
          </p>
        </article>

        <article>
          <h2>Projektkontext</h2>
          <p>
            Diese Website präsentiert ein Bachelorprojekt der Hochschule für Gestaltung
            Schwäbisch Gmünd. Beacon ist aktuell ein Konzept- und Prototypenprojekt und nicht
            für den realen Notfallbetrieb bestimmt.
          </p>
        </article>
      </section>

      <section class="legal-page__copy" aria-label="Rechtliche Hinweise">
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Als
          Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
          auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website kann Links zu externen Websites enthalten, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
          der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zum
          Zeitpunkt der Verlinkung nicht erkennbar.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website erstellten Inhalte, Texte, Bilder und Gestaltungselemente
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der vorherigen schriftlichen Zustimmung der jeweiligen Rechteinhaber.
        </p>

        <h2>Datenschutz</h2>
        <p>
          Informationen zur Verarbeitung personenbezogener Daten findest du in unserer
          <NuxtLink class="legal-page__textlink" to="/privacy">Datenschutzerklärung</NuxtLink>.
        </p>
      </section>
    </div>
  </main>
  <AppFooter />
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
.legal-page__textlink,
.legal-page a[href^='mailto'] {
  color: var(--orange);
  font-weight: 600;
}
.legal-page__textlink:hover,
.legal-page a[href^='mailto']:hover {
  color: var(--orange-deep);
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
