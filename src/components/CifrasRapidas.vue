<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
useScrollObserver()
</script>

<template>
  <section class="cifras">
    <div class="cifras__inner animado">
      <div class="cifra">
        <div class="cifra__numero">5</div>
        <div class="cifra__label">Programas Academicos</div>
      </div>
      <div class="cifra">
        <div class="cifra__numero">1</div>
        <div class="cifra__label">Posgrado</div>
      </div>
      <div class="cifra">
        <div class="cifra__numero">+20</div>
        <div class="cifra__label">Anos de Trayectoria</div>
      </div>
      <div class="cifra">
        <div class="cifra__numero">ED</div>
        <div class="cifra__label">Educacion a Distancia</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cifras {
  background: var(--blanco);
  padding: 0 24px;
  margin-top: -40px;
  position: relative;
  z-index: 10;
}
.cifras__inner {
  max-width: var(--max-ancho);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--blanco);
  border-radius: var(--radio);
  box-shadow: var(--sombra-lg);
  overflow: hidden;
}
.cifra {
  padding: 28px 24px;
  text-align: center;
  border-right: 1px solid var(--gris-200);
  transition: background var(--transicion);
}
.cifra:last-child { border-right: none; }
.cifra:hover { background: var(--gris-100); }
.cifra__numero {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 800;
  color: var(--azul);
  line-height: 1;
}
.cifra__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--gris-500);
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

@media (max-width: 768px) {
  .cifras__inner { grid-template-columns: repeat(2, 1fr); }
  .cifra { padding: 20px 16px; }
  .cifra__numero { font-size: 28px; }
}
</style>
