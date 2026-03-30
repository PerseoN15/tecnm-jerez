<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
import { carreras } from '../data/siteData.js'
useScrollObserver()

const iconos = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>'
}
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <div class="seccion__header animado">
        <div class="seccion__etiqueta">Oferta Educativa</div>
        <h2 class="seccion__titulo">Programas Academicos</h2>
        <div class="seccion__linea"></div>
      </div>
      <div class="carreras-grid">
        <a
          v-for="(c, i) in carreras"
          :key="i"
          :href="c.href"
          class="carrera-card animado"
        >
          <div class="carrera-card__icono" :style="{ background: c.gradiente }">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="iconos[c.icono]"></svg>
          </div>
          <div class="carrera-card__body">
            <h3 class="carrera-card__nombre">{{ c.nombre }}</h3>
            <p class="carrera-card__desc">{{ c.descripcion }}</p>
            <span class="carrera-card__link">Conocer mas &rarr;</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carreras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.carrera-card {
  background: var(--blanco);
  border-radius: var(--radio);
  overflow: hidden;
  box-shadow: var(--sombra-sm);
  border: 1px solid var(--gris-200);
  transition: all var(--transicion);
  display: flex;
  flex-direction: column;
}
.carrera-card:hover { box-shadow: var(--sombra-lg); transform: translateY(-4px); border-color: var(--azul-claro); }
.carrera-card__icono {
  height: 140px;
  display: flex; align-items: center; justify-content: center;
  color: var(--blanco);
  position: relative;
  overflow: hidden;
}
.carrera-card__icono::after {
  content: '';
  position: absolute;
  width: 200px; height: 200px;
  background: rgba(255,255,255,0.06);
  border-radius: 50%;
  top: -60px; right: -60px;
}
.carrera-card__body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
.carrera-card__nombre {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 700; color: var(--azul);
  margin-bottom: 8px; line-height: 1.3;
}
.carrera-card__desc { font-size: 14px; color: var(--gris-700); line-height: 1.5; flex: 1; }
.carrera-card__link {
  display: inline-flex; align-items: center; gap: 6px;
  margin-top: 16px; font-size: 14px; font-weight: 600;
  color: var(--azul); transition: gap var(--transicion);
}
.carrera-card:hover .carrera-card__link { gap: 10px; color: var(--azul-claro); }

@media (max-width: 768px) { .carreras-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .carreras-grid { grid-template-columns: 1fr; } }
</style>
