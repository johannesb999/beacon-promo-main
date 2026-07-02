<script setup lang="ts">
const { t } = useTranslations()
</script>

<template>
  <section class="join">
    <div class="join__inner">
      <div class="join__copy">
        <h2 class="section-title section-title--light">{{ t('join.title') }}</h2>
        <p class="join__lead">{{ t('join.lead') }}</p>

        <div class="help-card">
          <div class="help-card__head">
            <span class="help-card__label">{{ t('join.please') }}</span>
            <span class="help-card__beacon" aria-hidden="true">
              <svg viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" />
                <circle cx="20" cy="20" r="12" />
                <circle cx="20" cy="20" r="6" class="dot" />
              </svg>
            </span>
          </div>
          <p class="help-card__msg">{{ t('join.msg') }}</p>
          <div class="help-card__actions">
            <button class="hc-btn hc-btn--ghost">{{ t('join.notnow') }}</button>
            <button class="hc-btn hc-btn--solid">{{ t('join.iwill') }}</button>
          </div>
        </div>
      </div>

      <div class="join__photo">
        <img
          src="/imgs/ChatGPT Image 24. Juni 2026, 16_13_42.png"
          alt="A person responding to a Beacon alert on their phone"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.join {
  background: var(--violet);
  color: var(--white);
  margin: 30px auto;
  border-radius: 24px;
  overflow: hidden;
  width: calc(100% - 2 * var(--edge));
  max-width: var(--tilew);
  height: clamp(540px, 42vw, 620px);
}
.join__inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: stretch;
  height: 100%;
  margin: 0 !important;
}
.join__copy {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: clamp(36px, 4vw, 64px);
  padding-left: clamp(24px, 5vw, 64px);
  padding-right: clamp(16px, 3vw, 40px);
}
.join__copy h2.section-title {
  font-size: 48px;
  font-weight: 400;
}
.join__lead {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  max-width: 42ch;
  color: rgba(255, 255, 255, 0.95);
}
.help-card {
  margin-top: auto;
  width: min(100%, 390px);
  aspect-ratio: 1265 / 720;
  display: flex;
  flex-direction: column;
  background: #242424;
  border-radius: clamp(14px, 1.5vw, 18px);
  padding: clamp(16px, 2cqw, 22px);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.26);
}
.help-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.help-card__label {
  font-size: clamp(17px, 1.45cqw, 19px);
  font-weight: 400;
  line-height: 1;
  color: var(--violet);
}
.help-card__beacon {
  width: clamp(28px, 2.6cqw, 34px);
  aspect-ratio: 1;
  color: var(--violet);
  flex: 0 0 auto;
}
.help-card__beacon svg {
  display: block;
  width: 100%;
  height: 100%;
}
.help-card__beacon circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  opacity: 0.68;
}
.help-card__beacon .dot {
  fill: currentColor;
  stroke: none;
  opacity: 1;
}
.help-card__msg {
  margin: clamp(16px, 2.1cqw, 24px) 0 0;
  max-width: 13.6ch;
  font-size: 16px;
  font-weight: 400;
  color: var(--white);
  line-height: 1.38;
}
.help-card__actions {
  display: flex;
  gap: clamp(12px, 1.5cqw, 16px);
  margin-top: auto;
}
.hc-btn {
  flex: 1;
  font-family: var(--font);
  min-height: clamp(40px, 4cqw, 48px);
  font-size: clamp(14px, 1.45cqw, 17px);
  font-weight: 400;
  line-height: 1;
  padding: clamp(10px, 1.2cqw, 14px) clamp(12px, 1.5cqw, 18px);
  border-radius: clamp(9px, 0.7cqw, 11px);
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.16s ease, background 0.16s ease;
}
.hc-btn:hover {
  transform: translateY(-1px);
}
.hc-btn--ghost {
  background: transparent;
  color: #eeeeee;
  border-color: #dedede;
}
.hc-btn--solid {
  background: var(--violet);
  color: #242424;
  border-color: var(--violet);
}
.hc-btn--solid:hover {
  background: var(--violet-deep);
}

.join__photo {
  position: relative;
  height: 100%;
  border-radius: 260px 0 0 0;
  overflow: hidden;
}
.join__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
/*das hier ist ein test Kommentar */

@media (max-width: 900px) {
  .join {
    height: auto;
  }
  .join__inner {
    grid-template-columns: 1fr;
  }
  .join__photo {
    min-height: 240px;
    border-radius: 0;
  }
}

@media (max-width: 560px) {
  .help-card {
    aspect-ratio: auto;
    min-height: 240px;
  }
  /* keep both actions side by side even on the narrowest screens */
  .help-card__actions {
    flex-direction: row;
  }
}
</style>
