<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { heroSlides } from '../data/siteData.js'

const actual = ref(0)
let intervalo = null

function irSlide(n) {
  actual.value = n
}

onMounted(() => {
  intervalo = setInterval(() => {
    actual.value = (actual.value + 1) % heroSlides.length
  }, 6000)
})

onUnmounted(() => clearInterval(intervalo))
</script>

<template>
  <section class="hero">
    <div
      v-for="(slide, i) in heroSlides"
      :key="i"
      class="hero__slide"
      :class="{ activa: actual === i }"
    >
      <div class="hero__bg" :style="{ background: slide.gradiente }"></div>
      <div class="hero__overlay">
        <div class="hero__contenido">
          <div class="hero__etiqueta">{{ slide.etiqueta }}</div>
          <h1 class="hero__titulo">{{ slide.titulo }}</h1>
          <p class="hero__subtitulo">{{ slide.subtitulo }}</p>
          <a :href="slide.href" target="_blank" class="hero__cta">
            {{ slide.cta }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="hero__indicadores">
      <button
        v-for="(_, i) in heroSlides"
        :key="i"
        class="hero__dot"
        :class="{ activa: actual === i }"
        @click="irSlide(i)"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: var(--azul-oscuro);
}
.hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease;
}
.hero__slide.activa { opacity: 1; }
.hero__bg { width: 100%; height: 100%; }
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(27,57,106,0.82) 0%, rgba(18,40,71,0.5) 100%);
  display: flex;
  align-items: center;
}
.hero__contenido {
  max-width: var(--max-ancho);
  margin: 0 auto;
  padding: 0 48px;
  color: var(--blanco);
}
.hero__etiqueta {
  display: inline-block;
  padding: 5px 14px;
  background: var(--dorado);
  color: var(--azul-oscuro);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 3px;
  margin-bottom: 18px;
}
.hero__titulo {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  max-width: 680px;
}
.hero__subtitulo {
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;
  max-width: 540px;
  line-height: 1.6;
  margin-bottom: 28px;
}
.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--dorado);
  color: var(--azul-oscuro);
  font-size: 15px;
  font-weight: 700;
  border-radius: var(--radio);
  transition: all var(--transicion);
}
.hero__cta:hover {
  background: #D4AD2E;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201,162,39,0.35);
}
.hero__indicadores {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}
.hero__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all var(--transicion);
  border: none;
}
.hero__dot.activa { background: var(--dorado); width: 28px; border-radius: 5px; }

@media (max-width: 768px) {
  .hero { height: 400px; }
  .hero__contenido { padding: 0 24px; }
  .hero__subtitulo { font-size: 16px; }
}
@media (max-width: 480px) {
  .hero { height: 360px; }
}
</style>
