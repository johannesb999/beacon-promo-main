<script setup lang="ts">
/* Reusable phone frame: device chrome + notch + caption.
   The four distinct app screens are passed in via the default slot. */
defineProps<{
  caption: string
  screenClass?: string
}>()
</script>

<template>
  <figure class="phone-card">
    <div class="phone">
      <div class="phone__notch"></div>
      <div class="phone__screen map" :class="screenClass">
        <slot />
      </div>
    </div>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.phone-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.phone-card figcaption {
  font-size: 11.5px;
  color: var(--gray-400);
  text-align: center;
  max-width: 22ch;
}
.phone {
  position: relative;
  width: 100%;
  max-width: 200px;
  aspect-ratio: 200 / 410;
  background: var(--ink-900);
  border-radius: 30px;
  padding: 9px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}
.phone__notch {
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 38%;
  height: 16px;
  background: var(--ink-900);
  border-radius: 0 0 12px 12px;
  z-index: 3;
}
.phone__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
}

/* the simplified map surface inside each phone */
.map {
  background: #e4e4e4;
}
.map--connected {
  background: #dde3ec;
}
.map--alarm {
  background: #e7d2d1;
}
</style>
