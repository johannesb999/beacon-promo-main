<script setup lang="ts">
const { t } = useTranslations()
</script>

<template>
  <footer class="legal">
    <NuxtLink class="legal__link" to="/legal-notice">{{ t('legal') }}</NuxtLink>
    <span class="legal__sep">·</span>
    <NuxtLink class="legal__link" to="/privacy">{{ t('privacy') }}</NuxtLink>
  </footer>
</template>

<style scoped>
.legal {
  text-align: center;
  padding: 26px;
  background: var(--bg);
}
.legal__link {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--gray-400);
}
.legal__link:hover {
  color: var(--gray-600);
}
.legal__sep {
  margin-inline: 10px;
  color: var(--gray-300);
  font-size: 11px;
}
</style>