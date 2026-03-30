<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
import { sitiosInteres } from '../data/siteData.js'
useScrollObserver()
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <div class="seccion__header animado" style="text-align:center;">
        <div class="seccion__etiqueta">Aliados</div>
        <h2 class="seccion__titulo">Sitios de Interes</h2>
        <div class="seccion__linea" style="margin:16px auto 0;"></div>
      </div>
      <div class="sitios-grid animado">
        <a
          v-for="(sitio, i) in sitiosInteres"
          :key="i"
          :href="sitio.href"
          target="_blank"
          rel="noopener"
          :title="sitio.nombre"
        >
          <img :src="sitio.img" :alt="sitio.nombre" class="sitio-logo">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sitios-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.sitio-logo {
  height: 44px;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all var(--transicion);
}
.sitio-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>
