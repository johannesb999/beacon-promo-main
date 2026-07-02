<script setup lang="ts">
const { t } = useTranslations()

const roles = [
  { icon: 'person', titleKey: 'roles.person' },
  { icon: 'safespace', titleKey: 'roles.safespace' },
  { icon: 'partner', titleKey: 'roles.partner' },
] as const
</script>

<template>
  <section class="roles">
    <RoleCard
      v-for="role in roles"
      :key="role.titleKey"
      :icon="role.icon"
      :title="t(role.titleKey)"
      :text="t('roles.text')"
    />
  </section>
</template>

<style scoped>
.roles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  width: calc(100% - 2 * var(--edge));
  max-width: var(--tilew);
  margin: 30px auto clamp(70px, 7vw, 110px);
}

@media (max-width: 900px) {
  .roles {
    grid-template-columns: 1fr;
  }
}
</style>
