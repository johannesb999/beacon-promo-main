<script setup lang="ts">
// The four app screens are delivered as a single rendered image
// (screens + captions baked in), so this section just presents it.
</script>

<template>
  <section class="phones">
    <img
      class="phones__img"
      src="/imgs/Phone frames.png"
      alt="Four Beacon app screens: reachable Beacons, an armed route, helpers on the way, and the I-feel-safe alarm screen"
    />
  </section>
</template>

<style scoped>
.phones {
  padding: clamp(18px, 2vw, 30px) 0 clamp(40px, 5vw, 72px);
}
.phones__img {
  display: block;
  width: 100%;
  max-width: 1120px;
  height: auto;
  margin-inline: auto;
}
</style>
