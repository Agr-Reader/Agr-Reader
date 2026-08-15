// 轻量滚动渐显指令：进入视口时为元素添加 .agr-reveal-visible。
// 尊重 prefers-reduced-motion（直接显示，不做动画）；仅在客户端 onMounted 后触碰 window，避免 SSR 报错。
import type { Directive } from 'vue'

const VISIBLE_CLASS = 'agr-reveal-visible'

function reveal(el: HTMLElement) {
  el.classList.add(VISIBLE_CLASS)
}

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('agr-reveal')

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      reveal(el)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(el)
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  }
}
