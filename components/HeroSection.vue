<script setup lang="ts">
const { t } = useTranslations()

// The black dot is locked to the orange core's rim. We animate the ANGLE and
// recompute the point on the circle every frame, so it eases ALONG the arc
// toward the cursor's direction and never leaves the circumference.
const radarEl = ref<HTMLElement | null>(null)
const dotEl = ref<HTMLElement | null>(null)

let currentAngle = -Math.PI / 4 // default: upper-right
let targetAngle = currentAngle
let raf = 0
let animating = false

// place the dot on the rim at the current angle (core radius = 13% of the radar)
function placeDot() {
  const radar = radarEl.value
  const dot = dotEl.value
  if (!radar || !dot) return
  const radius = radar.getBoundingClientRect().width * 0.13
  const x = Math.cos(currentAngle) * radius
  const y = Math.sin(currentAngle) * radius
  dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
}

function tick() {
  // shortest signed angular distance, so it takes the nearer way round the rim
  const diff = Math.atan2(Math.sin(targetAngle - currentAngle), Math.cos(targetAngle - currentAngle))
  if (Math.abs(diff) < 0.0015) {
    currentAngle = targetAngle
    placeDot()
    animating = false
    return
  }
  currentAngle += diff * 0.18 // ease along the arc
  placeDot()
  raf = requestAnimationFrame(tick)
}

function onMove(e: MouseEvent) {
  const radar = radarEl.value
  if (!radar) return
  const r = radar.getBoundingClientRect()
  targetAngle = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2))
  if (!animating) {
    animating = true
    raf = requestAnimationFrame(tick)
  }
}

onMounted(() => {
  placeDot()
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('resize', placeDot)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('resize', placeDot)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section class="hero">
    <div class="hero__copy">
      <h1 class="hero__title">
        <span class="hero__title-big">{{ t('hero.title') }}</span>
        <span class="hero__title-sub">{{ t('hero.sub') }}</span>
      </h1>
    </div>

    <!-- Radar / beacon: rings expand from the core and fade as they travel out -->
    <div ref="radarEl" class="radar" aria-hidden="true">
      <span class="radar__wave"></span>
      <span class="radar__wave"></span>
      <span class="radar__wave"></span>
      <span class="radar__wave"></span>
      <span class="radar__wave"></span>
      <span class="radar__core"></span>
      <span ref="dotEl" class="radar__dot"></span>
    </div>

    <div class="hero__cta">
      <QrCode size="large" />
      <StoreBadges horizontal />
    </div>

    <p class="members">
      <span>
        <span class="members__line">{{ t('hero.already') }}</span>
        <span class="members__num">2.305</span>
      </span>
      <span class="members__line members__line--sub">{{ t('hero.members') }}</span>
    </p>

    <a href="#how" class="hero__howlink">{{ t('hero.howlink') }}</a>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1340px;
  margin: 0 auto;
  position: relative;
  /* the radar waves reach beyond the radar box — clip so they never push a
     horizontal scrollbar (the outer waves are ~transparent there anyway) */
  overflow: clip;
  /* fill the viewport below the 66px sticky nav */
  min-height: calc(100vh - 66px);
  min-height: calc(100svh - 66px);
  padding-top: 56px;
  padding-bottom: 40px;
  padding-left: var(--edge);
  padding-right: var(--edge);
}

/* headline — sits top-left, layered over the radar */
.hero__copy {
  position: relative;
  z-index: 2;
  max-width: 60%;
}
.hero__title {
  line-height: 0.92;
}
.hero__title-big {
  display: block;
  font-size: clamp(64px, 9vw, 116px);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--violet);
}
.hero__title-sub {
  display: block;
  font-size: clamp(20px, 2.4vw, 30px);
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--ink-900);
  margin-top: 20px;
}

/* QR + store badges — bottom-left */
.hero__cta {
  position: absolute;
  left: var(--edge);
  bottom: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

/* Radar — dead centre of the section */
.radar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(560px, 62vmin);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  z-index: 1;
}
.radar__core {
  position: absolute;
  width: 26%;
  aspect-ratio: 1;
  background: var(--orange);
  border-radius: 50%;
  box-shadow: 0 8px 30px rgba(240, 83, 28, 0.45);
  z-index: 1;
}
/* expanding rings — every visible line is one of these waves growing out
   from the core and fading the further it travels. */
.radar__wave {
  position: absolute;
  width: 26%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1.5px solid var(--orange);
  opacity: 0;
  z-index: 0;
  /* per-wave duration / delay / reach / peak make the pulses irregular */
  animation: radar-wave var(--dur, 4.5s) linear var(--delay, 0s) infinite;
}
.radar__wave:nth-child(1) { --dur: 3.6s; --delay: -0.5s; --max: 150%; --peak: 0.7; }
.radar__wave:nth-child(2) { --dur: 5.2s; --delay: -2.1s; --max: 195%; --peak: 0.46; }
.radar__wave:nth-child(3) { --dur: 3.2s; --delay: -2.6s; --max: 135%; --peak: 0.78; }
.radar__wave:nth-child(4) { --dur: 5.6s; --delay: -1.2s; --max: 178%; --peak: 0.4; }
.radar__wave:nth-child(5) { --dur: 4.3s; --delay: -3.7s; --max: 165%; --peak: 0.6; }
@keyframes radar-wave {
  0% {
    width: 26%;
    opacity: 0;
  }
  9% {
    opacity: var(--peak, 0.7);
  }
  100% {
    width: var(--max, 100%);
    opacity: 0;
  }
}
/* the cursor-tracking dot: JS keeps it on the core's rim and eases it along
   the arc, so no CSS transition here (that would lerp straight across the
   interior). Default offset (before JS / on touch) sits on the rim, up-right. */
.radar__dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  background: var(--ink-900);
  border-radius: 50%;
  transform: translate(-50%, -50%) translate(51px, -51px);
  z-index: 3;
}

/* member count — bottom-right */
.members {
  position: absolute;
  right: var(--edge);
  bottom: 48px;
  z-index: 2;
  text-align: right;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 600;
  color: var(--ink-900);
  line-height: 1.05;
}
.members__num {
  display: inline-block;
  margin-left: 10px;
  color: var(--orange);
  font-weight: 700;
}
.members__line--sub {
  display: block;
  margin-top: 2px;
  font-size: clamp(15px, 1.35vw, 20px);
  font-weight: 500;
  line-height: 1.15;
}
.members__line {
  color: var(--gray-600);
}

/* "How it Works" hint — bottom-centre */
.hero__howlink {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-400);
  letter-spacing: 0.02em;
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 56px;
  }
  .hero__copy {
    max-width: 100%;
    align-self: stretch;
    text-align: center;
  }
  .radar {
    /* relative (not static) so the rim dot still anchors to the radar */
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: min(420px, 80vw);
  }
  .hero__cta {
    position: static;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .members {
    position: static;
    text-align: center;
  }
  .hero__howlink {
    display: none;
  }
}
</style>
