import { onMounted, onUnmounted } from 'vue'

export function useScrollObserver(selector = '.animado', threshold = 0.1) {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold })

    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
