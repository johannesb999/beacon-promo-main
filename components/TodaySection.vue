<script setup lang="ts">
const { t } = useTranslations()
</script>

<template>
  <section class="today">
    <div class="container today__inner">
      <h2 class="today__title">
        <span>{{ t('today.l1') }}</span>
        <span>{{ t('today.l2') }}</span>
      </h2>
      <div class="today__cta">
        <QrCode light />
        <StoreBadges light horizontal />
      </div>
    </div>
  </section>
</template>

<style scoped>
.today {
  width: calc(100% - 2 * var(--edge));
  max-width: var(--tilew);
  margin: 30px auto;
  border-radius: 24px;
  position: relative;
  color: var(--white);
  background: var(--dark-bg);
  overflow: hidden;
}
/* photo sits on the LEFT (behind the title) and fades out toward the RIGHT,
   leaving the QR / badges side a clean dark surface so the code stays scannable */
.today::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 72%;
  background-image: url('/imgs/ChatGPT Image 24. Juni 2026, 17_57_54.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.72;
  mask-image: linear-gradient(72deg, #000 0 58%, rgba(0, 0, 0, 0.7) 68%, transparent 86%);
  -webkit-mask-image: linear-gradient(72deg, #000 0 58%, rgba(0, 0, 0, 0.7) 68%, transparent 86%);
}
.today::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 11, 14, 0.62), rgba(10, 11, 14, 0.2) 46%, rgba(10, 11, 14, 0) 66%),
    linear-gradient(0deg, rgba(10, 11, 14, 0.38), rgba(10, 11, 14, 0.38));
  pointer-events: none;
}
.today__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding-block: clamp(40px, 4.5vw, 64px);
  flex-wrap: wrap;
}
.today__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0;
}
.today__title span {
  display: block;
}
/* QR on top, store badges beneath — right-aligned cluster on the clean side */
.today__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: clamp(16px, 2vw, 24px);
}
.today__cta :deep(.store-badges) {
  gap: 12px;
}

@media (max-width: 900px) {
  .today::before {
    width: 100%;
    mask-image: linear-gradient(0deg, #000 0 40%, transparent 88%);
    -webkit-mask-image: linear-gradient(0deg, #000 0 40%, transparent 88%);
  }
  .today__inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .today__title {
    text-align: center;
  }
  .today__cta {
    align-items: center;
  }
}
</style>
