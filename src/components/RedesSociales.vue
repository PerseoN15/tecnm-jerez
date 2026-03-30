<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
useScrollObserver()
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <div class="seccion__header animado" style="text-align:center;">
        <div class="seccion__etiqueta">Siguenos</div>
        <h2 class="seccion__titulo">Redes Sociales</h2>
        <div class="seccion__linea" style="margin:16px auto 0;"></div>
      </div>
      <div class="redes-contenedor animado">
        <iframe
          width="400" height="480"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftecjerez&tabs=timeline&width=400&height=480&small_header=true"
          style="border:none;overflow:hidden;border-radius:var(--radio);box-shadow:var(--sombra-md);"
          scrolling="no" frameborder="0" allowfullscreen="true"
          allow="encrypted-media" loading="lazy"
        ></iframe>
        <iframe
          width="400" height="480"
          src="https://www.youtube.com/embed/FUXHgEbG9O4?si=Q4DTv4tTu7yZPF6d"
          title="YouTube" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen loading="lazy"
          style="border-radius:var(--radio);box-shadow:var(--sombra-md);"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.redes-contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}
</style>
