<script setup lang="ts">
const { t } = useTranslations()

const steps = [
  { num: '1.', titleKey: 'howto.s1', descKey: 'howto.s1d' },
  { num: '2.', titleKey: 'howto.s2', descKey: 'howto.s2d' },
  { num: '3.', titleKey: 'howto.s3', descKey: 'howto.s3d' },
  { num: '4.', titleKey: 'howto.s4', descKey: 'howto.s4d' },
] as const
</script>

<template>
  <section class="howto" id="how">
    <div class="howto__top">
      <figure class="howto__photo">
        <svg class="howto__photo-art" viewBox="0 0 500 500" role="img" aria-labelledby="howto-photo-title">
          <title id="howto-photo-title">A person checking the Beacon app on a phone at night</title>
          <defs>
            <clipPath id="howto-photo-clip" clipPathUnits="userSpaceOnUse">
              <circle cx="250" cy="250" r="168" />
            </clipPath>
          </defs>

          <!-- concentric beacon rings -->
          <circle class="howto__ring" cx="250" cy="250" r="200" />
          <circle class="howto__ring howto__ring--faint" cx="250" cy="250" r="216" />

          <!-- notch: punch the rings out behind the dot with the section background -->
          <circle class="howto__notch" cx="398" cy="96" r="38" />

          <!-- photo + its solid orange rim -->
          <image
            class="howto__photo-image"
            href="/imgs/260624_BEACON_Bachelor_Kampagne_Plakat1.png"
            x="78"
            y="78"
            width="344"
            height="344"
            preserveAspectRatio="xMidYMid slice"
            clip-path="url(#howto-photo-clip)"
          />
          <circle class="howto__photo-outline" cx="250" cy="250" r="168" />

          <!-- the beacon dot resting on the rim -->
          <circle class="howto__dot" cx="398" cy="96" r="32" />
        </svg>
      </figure>

      <div class="howto__body">
        <h2 class="howto__title">{{ t('howto.title') }}</h2>
        <ol class="howto__steps">
          <li v-for="s in steps" :key="s.num" class="howstep">
            <span class="howstep__num">{{ s.num }}</span>
            <div class="howstep__text">
              <h3 class="howstep__title">{{ t(s.titleKey) }}</h3>
              <p class="howstep__desc">{{ t(s.descKey) }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <PhoneMockups />
  </section>
</template>

<style scoped>
.howto {
  max-width: 1340px;
  margin: 30px auto;
  color: var(--ink-900);
  overflow: hidden;
}
.howto__top {
  display: grid;
  grid-template-columns: minmax(300px, 0.38fr) minmax(0, 1fr);
  gap: clamp(46px, 6vw, 90px);
  align-items: center;
  padding-top: clamp(72px, 6vw, 96px);
  padding-bottom: clamp(24px, 3vw, 44px);
  padding-left: clamp(44px, 4vw, 64px);
  padding-right: 0;
}
.howto__photo {
  width: min(100%, 500px);
  aspect-ratio: 1;
  justify-self: start;
  margin: 0;
}
.howto__photo-art {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.howto__ring {
  fill: none;
  stroke: var(--orange);
  stroke-width: 2;
}
.howto__ring--faint {
  stroke-width: 1.4;
  opacity: 0.6;
}
/* matches the section background so it cleanly notches the rings behind the dot */
.howto__notch {
  fill: var(--bg);
}
.howto__photo-image {
  display: block;
}
.howto__photo-outline {
  fill: none;
  stroke: var(--orange);
  stroke-width: 6;
}
.howto__dot {
  fill: #2b2b2b;
}
.howto__body {
  min-width: 0;
}
.howto__title {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.05;
  margin-bottom: clamp(34px, 4vw, 54px);
}
.howto__steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 52px) clamp(46px, 7vw, 92px);
}
.howstep {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(24px, 3vw, 38px);
  align-items: start;
}
.howstep__num {
  color: var(--orange);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 800;
  line-height: 1;
}
.howstep__title {
  color: var(--orange);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  margin-bottom: 12px;
}
.howstep__desc {
  max-width: 44ch;
  color: #3e3e3e;
  font-size: 16px;
  line-height: 1.35;
}

@media (max-width: 900px) {
  .howto__top {
    grid-template-columns: 1fr;
    gap: 34px;
  }
  .howto__photo {
    width: min(500px, calc(100% - 32px));
    justify-self: center;
  }
  .howto__steps {
    grid-template-columns: 1fr;
  }
}
</style>