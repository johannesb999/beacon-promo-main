<script setup lang="ts">
const storeLink = useStoreLink()

withDefaults(defineProps<{ light?: boolean; size?: 'default' | 'large' }>(), {
  light: false,
  size: 'default',
})
</script>

<template>
  <a class="qr" :class="[`qr--${size}`, { 'qr--light': light }]" :href="storeLink" aria-label="QR code">
    <img src="/imgs/qr code.svg" alt="QR code" />
  </a>
</template>

<style scoped>
.qr {
  display: block;
  width: clamp(120px, 9vw, 150px);
  height: clamp(120px, 9vw, 150px);
}
.qr--large {
  width: clamp(160px, 12vw, 210px);
  height: clamp(160px, 12vw, 210px);
}
.qr img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.qr--light img {
  filter: brightness(0) invert(1);
}

@media (max-width: 900px) {
  .qr {
    display: none;
  }
}
</style>
