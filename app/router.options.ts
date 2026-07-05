import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'

// Nuxt's built-in scrollBehavior does not scroll when only the hash changes
// (same-page nav links like /#how) and ignores an element's scroll-margin-top.
// Resolve the target position ourselves; for cross-page jumps wait until the
// new page has rendered so the hash target exists.
function resolvePosition(to: RouteLocationNormalized) {
  if (to.hash) {
    const el = document.querySelector(to.hash) as HTMLElement | null
    if (el) {
      const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0
      return { el: to.hash, top: margin, behavior: 'smooth' as const }
    }
  }
  return { top: 0 }
}

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.path === from.path) return resolvePosition(to)

    const nuxtApp = useNuxtApp()
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        setTimeout(() => resolve(resolvePosition(to)), 0)
      })
    })
  },
} satisfies RouterConfig
