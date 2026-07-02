<script setup lang="ts">
const { t, locale, setLang } = useTranslations()
</script>

<template>
  <header class="nav">
    <nav class="nav__inner container">
      <ul class="nav__links">
        <li><a href="#top" class="nav__link is-active">{{ t('nav.home') }}</a></li>
        <li><a href="#how" class="nav__link">{{ t('nav.how') }}</a></li>
        <li><a href="#about" class="nav__link">{{ t('nav.about') }}</a></li>
      </ul>
      <div class="lang" role="group" aria-label="Language">
        <button
          class="lang__btn"
          :class="{ 'is-active': locale === 'de' }"
          @click="setLang('de')"
        >
          DE
        </button>
        <span class="lang__sep">|</span>
        <button
          class="lang__btn"
          :class="{ 'is-active': locale === 'en' }"
          @click="setLang('en')"
        >
          EN
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  background: rgba(245, 244, 241, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
}
.nav__links {
  display: flex;
  gap: 34px;
}
.nav__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-600);
  transition: color 0.18s ease;
}
.nav__link:hover {
  color: var(--ink-900);
}
.nav__link.is-active {
  color: var(--ink-900);
  font-weight: 700;
}

.lang {
  display: flex;
  align-items: center;
  gap: 8px;
}
.lang__btn {
  font-family: var(--font);
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-400);
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.18s ease;
}
.lang__btn:hover {
  color: var(--gray-600);
}
.lang__btn.is-active {
  color: var(--ink-900);
}
.lang__sep {
  color: var(--gray-300);
}

@media (max-width: 520px) {
  .nav__links {
    gap: 18px;
  }
}
</style>
