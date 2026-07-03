<script setup lang="ts">
const { t } = useTranslations()

// proper nouns are not translated
const authors = [
  { name: 'Aileen Kling', href: '#' },
  { name: 'Johannes Biess', href: 'https://johannes-biess.com' },
  { name: 'Jannik Flaig', href: 'https://jannik-flaig.de' },
]
</script>

<template>
  <section class="about" id="about">
    <div class="about__copy">
      <h2 class="section-title about__title">{{ t('about.title') }}</h2>

      <p class="about__text">
        {{ t('about.lead1')
        }}<a class="about__link" href="https://www.hfg-gmuend.de/" target="_blank" rel="noopener">{{ t('about.school') }}</a>.
      </p>
      <p class="about__text">{{ t('about.lead2') }}</p>

      <ul class="about__authors">
        <li v-for="a in authors" :key="a.name">
          <a class="author" :href="a.href" target="_blank" rel="noopener">
            <span>{{ a.name }}</span>
            <svg
              class="author__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M14 4h6v6" />
              <path d="M20 4 11 13" />
              <path d="M19 13.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5.5" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <a
      class="bachelor-btn"
      href="/docs/DP-KG_Beacon_Biess_Flaig_Kling_SS26_Abgabe.pdf"
      download="Beacon-documentation.pdf"
    >
      <span>{{ t('about.btn') }}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
  </section>
</template>

<style scoped>
.about {
  width: calc(100% - 2 * var(--edge));
  max-width: var(--tilew);
  margin: 30px auto;
  padding-block: clamp(46px, 5vw, 72px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}
.about__copy {
  max-width: 620px;
  display: flex;
  flex-direction: column;
}
.about__title {
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 800;
  color: var(--ink-900);
  margin-bottom: clamp(20px, 2.4vw, 34px);
}
.about__text {
  font-size: clamp(16px, 1.35vw, 19px);
  color: var(--ink-800);
  line-height: 1.55;
  max-width: 48ch;
}
.about__text + .about__text {
  margin-top: clamp(14px, 1.6vw, 22px);
}
.about__link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.16s ease;
}
.about__link:hover {
  color: var(--orange);
}
.about__authors {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(20px, 2.6vw, 40px);
  margin-top: clamp(30px, 3.6vw, 54px);
}
.author {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(15px, 1.3vw, 19px);
  font-weight: 500;
  color: var(--ink-900);
  transition: color 0.16s ease;
}
.author:hover {
  color: var(--orange);
}
.author__icon {
  width: clamp(16px, 1.2vw, 20px);
  height: clamp(16px, 1.2vw, 20px);
  flex: 0 0 auto;
}
.bachelor-btn {
  display: inline-flex;
  align-items: center;
  gap: clamp(10px, 1.2vw, 16px);
  background: var(--orange);
  color: var(--white);
  font-size: clamp(22px, 2.4vw, 34px);
  font-weight: 600;
  padding: clamp(18px, 2vw, 28px) clamp(30px, 3.5vw, 54px);
  border-radius: clamp(12px, 1.4vw, 18px);
  transition: transform 0.16s ease, background 0.16s ease;
}
.bachelor-btn:hover {
  transform: translateY(-2px);
  background: var(--orange-deep);
}
.bachelor-btn svg {
  width: clamp(20px, 2vw, 30px);
  height: clamp(20px, 2vw, 30px);
}

@media (max-width: 760px) {
  .about {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .about__copy {
    align-items: center;
  }
  .about__title,
  .about__text {
    text-align: center;
  }
  .about__text {
    margin-inline: auto;
  }
  .about__authors {
    justify-content: center;
  }
}
</style>
