<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
import { documentos } from '../data/siteData.js'
useScrollObserver()
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <div class="seccion__header animado">
        <div class="seccion__etiqueta">Documentos</div>
        <h2 class="seccion__titulo">Convocatorias y Normatividad</h2>
        <div class="seccion__linea"></div>
      </div>
      <div class="convocatorias-grid">
        <a
          v-for="(doc, i) in documentos"
          :key="i"
          :href="doc.href"
          target="_blank"
          class="convocatoria animado"
        >
          <div class="convocatoria__icono">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div>
            <div class="convocatoria__nombre">{{ doc.nombre }}</div>
            <div class="convocatoria__meta">PDF</div>
          </div>
          <div class="convocatoria__flecha">&rarr;</div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.convocatorias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.convocatoria {
  display: flex; align-items: center; gap: 16px;
  padding: 20px; background: var(--blanco);
  border-radius: var(--radio); border: 1px solid var(--gris-200);
  transition: all var(--transicion);
}
.convocatoria:hover { border-color: var(--azul); box-shadow: var(--sombra-md); }
.convocatoria__icono {
  width: 48px; height: 48px; border-radius: var(--radio);
  background: var(--gris-100); display: flex;
  align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--rojo-gob);
}
.convocatoria__nombre { font-size: 15px; font-weight: 600; color: var(--gris-900); line-height: 1.3; }
.convocatoria__meta { font-size: 12px; color: var(--gris-500); margin-top: 2px; }
.convocatoria__flecha { margin-left: auto; color: var(--gris-300); transition: color var(--transicion); flex-shrink: 0; }
.convocatoria:hover .convocatoria__flecha { color: var(--azul); }

@media (max-width: 768px) { .convocatorias-grid { grid-template-columns: 1fr; } }
</style>
