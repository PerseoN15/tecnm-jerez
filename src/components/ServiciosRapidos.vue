<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
import { servicios } from '../data/siteData.js'
useScrollObserver()

const iconos = {
  grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>',
  login: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  books: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
}
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <div class="seccion__header animado">
        <div class="seccion__etiqueta">Acceso Rapido</div>
        <h2 class="seccion__titulo">Servicios y Plataformas</h2>
        <div class="seccion__linea"></div>
      </div>
      <div class="servicios-grid">
        <a
          v-for="(s, i) in servicios"
          :key="i"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="servicio animado"
        >
          <div class="servicio__icono">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="iconos[s.icono]"></svg>
          </div>
          <span class="servicio__nombre">{{ s.nombre }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.servicio {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px; background: var(--blanco);
  border-radius: var(--radio); border: 1px solid var(--gris-200);
  transition: all var(--transicion);
}
.servicio:hover { border-color: var(--dorado); background: var(--dorado-claro); }
.servicio__icono {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--azul); color: var(--blanco);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.servicio:hover .servicio__icono { background: var(--azul-oscuro); }
.servicio__nombre { font-size: 14px; font-weight: 600; color: var(--gris-900); }

@media (max-width: 768px) { .servicios-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .servicios-grid { grid-template-columns: 1fr; } }
</style>
