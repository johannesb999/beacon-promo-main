<script setup lang="ts">
import appstoreIcon from '../icons/appstore.svg'
import playstoreIcon from '../icons/playstore.svg'

const storeLink = useStoreLink()

withDefaults(defineProps<{ light?: boolean; horizontal?: boolean }>(), { light: false, horizontal: false })
</script>

<template>
  <div class="store-badges" :class="{ 'store-badges--horizontal': horizontal }">
    <a class="badge" :class="{ 'badge--light': light }" :href="storeLink">
      <img :src="playstoreIcon" class="badge__icon" alt="" aria-hidden="true" />
      <span>Playstore</span>
    </a>
    <span class="badge badge--disabled" :class="{ 'badge--light': light }" aria-disabled="true">
      <img :src="appstoreIcon" class="badge__icon" alt="" aria-hidden="true" />
      <span>Appstore</span>
    </span>
  </div>
</template>

<style scoped>
.store-badges {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.store-badges--horizontal {
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 18px;
  background: var(--ink-900);
  color: var(--white);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  width: max-content;
  transition: transform 0.18s ease, background 0.18s ease;
}
.badge:not(.badge--disabled):hover {
  transform: translateY(-2px);
  background: #000;
}
.badge--disabled {
  cursor: not-allowed;
  opacity: 0.48;
}
.badge__icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex: 0 0 auto;
}
.badge--light .badge__icon {
  filter: invert(1);
}
.badge--light {
  background: var(--white);
  color: var(--ink-900);
}
.badge--light:not(.badge--disabled):hover {
  background: var(--gray-100);
}

@media (max-width: 900px) {
  .store-badges--horizontal {
    flex-direction: column;
    align-items: center;
  }
}
</style>
