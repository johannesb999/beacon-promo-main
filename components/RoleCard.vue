<script setup lang="ts">
import personIcon from '../icons/Frame 1597880578.svg'
import safespaceIcon from '../icons/Frame 1597880578-1.svg'
import partnerIcon from '../icons/Frame 1597880578-2.svg'

const props = defineProps<{
  title: string
  text: string
  icon: 'person' | 'safespace' | 'partner'
}>()

const iconSrc = {
  person: personIcon,
  safespace: safespaceIcon,
  partner: partnerIcon,
}[props.icon]
</script>

<template>
  <article class="role-card">
    <img class="role-card__icon" :src="iconSrc" alt="" aria-hidden="true" />
    <h3 class="role-card__title">{{ title }}</h3>
    <p class="role-card__text">{{ text }}</p>
  </article>
</template>

<style scoped>
.role-card {
  background: #DAD9E8;
  border-radius: var(--radius);
  padding: 26px 26px 30px;
}
.role-card__icon {
  display: block;
  width: 48px;
  height: auto;
  margin-bottom: 16px;
}
.role-card__title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}
.role-card__text {
  font-size: 16px;
  color: var(--gray-600);
  line-height: 1.55;
}
</style>
