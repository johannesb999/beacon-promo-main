<script setup lang="ts">
import ChevronIcon from '../icons/fi-sr-angle-small-right.svg'

const { t, locale } = useTranslations()

const reasons = [
  { n: '1', titleKey: 'reasons.r1', descKey: 'reasons.r1d' },
  { n: '2', titleKey: 'reasons.r2', descKey: 'reasons.r2d' },
  { n: '3', titleKey: 'reasons.r3', descKey: 'reasons.r3d' },
] as const

const titleLine1 = computed(() => (locale.value === 'en' ? 'Reasons' : t('reasons.title1')))
const titleLine2 = computed(() => (locale.value === 'en' ? 'why' : t('reasons.title2')))
const titleAccent = computed(() => (locale.value === 'en' ? t('reasons.title2') : ''))

// ---- preview carousel ------------------------------------------------------
interface Slide {
  type: 'image' | 'placeholder'
  src?: string
  alt?: string
}
const slides: Slide[] = [
  { type: 'image', src: '/imgs/Map.png', alt: 'Map of your surroundings with reachable Beacons' },
  { type: 'image', src: '/imgs/light dark mock.png', alt: 'Beacon app light and dark mode preview' },
  { type: 'placeholder' },
]
const current = ref(0)
const currentSlide = computed(() => slides[current.value])

const AUTOPLAY_MS = 4500
let timer: ReturnType<typeof setInterval> | undefined

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}
function startTimer() {
  stopTimer()
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, AUTOPLAY_MS)
}
// any manual navigation restarts the timer so it doesn't advance right after
function goTo(i: number) {
  current.value = (i + slides.length) % slides.length
  startTimer()
}
function next() {
  goTo(current.value + 1)
}
function prev() {
  goTo(current.value - 1)
}

onMounted(startTimer)
onBeforeUnmount(stopTimer)
</script>

<template>
  <section class="reasons" id="reasons">
    <div class="reasons__tile reasons__tile--title">
      <h2 class="reasons__heading">
        <span class="reasons__count">3</span>
        <span class="reasons__heading-text">
          <span>{{ titleLine1 }}</span>
          <span>{{ titleLine2 }} <strong>{{ titleAccent }}</strong></span>
        </span>
      </h2>
    </div>

    <div
      class="reasons__tile reasons__tile--carousel"
      aria-roledescription="carousel"
      aria-label="Beacon app preview carousel"
      @mouseenter="stopTimer"
      @mouseleave="startTimer"
    >
      <button class="carousel__btn carousel__btn--prev" type="button" aria-label="Previous preview" @click="prev">
        <img :src="ChevronIcon" alt="" aria-hidden="true" />
      </button>

      <Transition name="carousel-fade" mode="out-in">
        <img
          v-if="currentSlide.type === 'image'"
          :key="current"
          class="carousel__img"
          :src="currentSlide.src"
          :alt="currentSlide.alt"
        />
        <div v-else :key="current" class="carousel__placeholder" role="img" aria-label="Preview coming soon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>Placeholder</span>
        </div>
      </Transition>

      <button class="carousel__btn carousel__btn--next" type="button" aria-label="Next preview" @click="next">
        <img :src="ChevronIcon" alt="" aria-hidden="true" />
      </button>

      <div class="carousel__dots">
        <button
          v-for="(s, i) in slides"
          :key="i"
          type="button"
          class="carousel__dot"
          :class="{ 'is-active': i === current }"
          :aria-label="`Go to slide ${i + 1}`"
          @click="goTo(i)"
        ></button>
      </div>
    </div>

    <article v-for="r in reasons" :key="r.n" class="reasons__tile reason-card">
      <span class="reason-card__num">{{ r.n }}.</span>
      <div class="reason-card__copy">
        <h3 class="reason-card__title">{{ t(r.titleKey) }}</h3>
        <p class="reason-card__desc">{{ t(r.descKey) }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.reasons {
  width: calc(100% - 2 * var(--edge));
  max-width: var(--tilew);
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: minmax(620px, 1fr) minmax(190px, auto);
  gap: 22px;
  background: transparent;
  color: var(--ink-900);
}
.reasons__tile {
  min-width: 0;
  border-radius: 18px;
  overflow: hidden;
}
.reasons__tile--title {
  display: flex;
  align-items: center;
  background: var(--orange);
  padding: clamp(34px, 4vw, 58px) clamp(30px, 4vw, 54px);
}
.reasons__heading {
  display: flex;
  align-items: center;
  gap: clamp(20px, 2.8vw, 36px);
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.15;
}
.reasons__count {
  font-size: clamp(108px, 11vw, 170px);
  font-weight: 400;
  line-height: 0.9;
}
.reasons__heading-text span {
  display: block;
}
.reasons__heading strong {
  color: var(--white);
  font: inherit;
}
.reasons__tile--carousel {
  position: relative;
  grid-column: span 2;
  display: grid;
  place-items: center;
  background: var(--ink-900);
  padding: clamp(22px, 3vw, 38px) clamp(64px, 7vw, 96px) clamp(34px, 3.4vw, 50px);
}
.carousel__img {
  display: block;
  width: auto;
  height: min(100%, 540px);
  max-width: min(86%, 760px);
  object-fit: contain;
}
.carousel__placeholder {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  width: min(66%, 560px);
  aspect-ratio: 16 / 10;
  border: 2px dashed rgba(255, 255, 255, 0.22);
  border-radius: 18px;
  color: rgba(255, 255, 255, 0.5);
}
.carousel__placeholder svg {
  width: clamp(40px, 5vw, 58px);
  height: clamp(40px, 5vw, 58px);
}
.carousel__placeholder span {
  font-size: clamp(15px, 1.4vw, 19px);
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* crossfade between slides */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.4s ease;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}
.carousel__btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 50%;
  background: var(--white);
  color: var(--ink-900);
  cursor: pointer;
}
.carousel__btn img {
  display: block;
  width: 18px;
  height: 18px;
}
.carousel__btn--prev {
  left: clamp(42px, 4vw, 66px);
}
.carousel__btn--prev img {
  transform: rotate(180deg);
}
.carousel__btn--next {
  right: clamp(42px, 4vw, 66px);
}
.carousel__dots {
  position: absolute;
  left: 50%;
  bottom: clamp(24px, 2.3vw, 36px);
  transform: translateX(-50%);
  display: flex;
  gap: 14px;
}
.carousel__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.86);
  cursor: pointer;
  transition: background 0.16s ease, transform 0.16s ease;
}
.carousel__dot:hover {
  transform: scale(1.15);
}
.carousel__dot.is-active {
  background: var(--orange);
}
.reason-card {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: clamp(12px, 1.6vw, 24px);
  min-height: 190px;
  background: var(--ink-900);
  color: var(--white);
  padding: clamp(30px, 3.6vw, 46px) clamp(20px, 2.6vw, 32px);
}
.reason-card__num {
  color: var(--orange);
  font-size: clamp(68px, 7vw, 112px);
  font-weight: 400;
  line-height: 0.9;
}
.reason-card__copy {
  display: grid;
  gap: clamp(16px, 1.8vw, 24px);
}
.reason-card__title {
  max-width: 18ch;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0;
}
.reason-card__desc {
  max-width: 24ch;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.28;
}

@media (max-width: 900px) {
  .reasons {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
  .reasons__tile--carousel {
    grid-column: auto;
    min-height: 520px;
  }
  .carousel__img {
    width: auto;
    height: min(100%, 430px);
    max-width: min(82%, 520px);
  }
  .reasons__heading {
    line-height: 1.1;
  }
  .reason-card {
    min-height: 160px;
  }
}
</style>


