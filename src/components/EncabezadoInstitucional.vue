<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['abrir-buscador'])

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="encabezado" :class="{ scrolled }">
    <div class="encabezado__inner">
      <div class="encabezado__logos">
        <a href="https://www.gob.mx/sep" target="_blank" rel="noopener">
          <img src="/img/logos/educacion.png" alt="SEP">
        </a>
        <div class="separador"></div>
        <a href="https://www.tecnm.mx/" target="_blank" rel="noopener">
          <img src="/img/logos/tecnm.jpg" alt="TecNM">
        </a>
        <div class="separador"></div>
        <a href="/">
          <img src="/img/logos/ITSJ.png" alt="TecNM Campus Jerez">
        </a>
      </div>
      <div class="encabezado__titulo">
        Campus Jerez
        <span>Tecnologico Nacional de Mexico</span>
      </div>
      <div class="encabezado__acciones">
        <a href="https://login.microsoftonline.com/?whr=tecnm.mx" target="_blank" class="btn-accion btn-accion--correo" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          <span class="correo-label">Correo</span>
        </a>
        <button class="btn-accion btn-accion--buscar" @click="$emit('abrir-buscador')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.encabezado {
  background: var(--blanco);
  border-bottom: 1px solid var(--gris-200);
  padding: 12px 24px;
  position: sticky;
  top: 44px;
  z-index: 999;
  transition: box-shadow var(--transicion);
}

.encabezado.scrolled {
  box-shadow: var(--sombra-md);
}

.encabezado__inner {
  max-width: var(--max-ancho);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.encabezado__logos {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.encabezado__logos img {
  height: 44px;
  max-width: 100%;
}

.separador {
  width: 1px;
  height: 36px;
  background: var(--gris-300);
}

.encabezado__titulo {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--azul);
  line-height: 1.2;
  min-width: 0;
}

.encabezado__titulo span {
  display: block;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: var(--gris-500);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}

.encabezado__acciones {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.btn-accion--correo {
  background: var(--azul);
  color: var(--blanco);
}

.btn-accion--correo:hover {
  background: var(--azul-oscuro);
}

.btn-accion--buscar {
  background: var(--gris-100);
  color: var(--gris-700);
  border: 1px solid var(--gris-200);
}

.btn-accion--buscar:hover {
  border-color: var(--azul);
  color: var(--azul);
}

@media (max-width: 992px) {
  .encabezado__inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .encabezado__logos {
    flex-wrap: wrap;
    justify-content: center;
  }

  .encabezado__titulo {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .encabezado {
    position: relative;
    top: auto;
    padding: 14px 16px;
  }

  .encabezado__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }

  .encabezado__logos {
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .encabezado__logos img {
    height: 30px;
  }

  .separador {
    display: none;
  }

  .encabezado__titulo {
    font-size: 16px;
    text-align: center;
  }

  .encabezado__titulo span {
    font-size: 11px;
    letter-spacing: 0.05em;
  }

  .encabezado__acciones {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .encabezado__acciones > * {
    width: 100%;
    justify-content: center;
    min-width: 0;
  }

  .correo-label {
    display: inline;
  }
}

@media (max-width: 480px) {
  .encabezado__logos img {
    height: 26px;
  }

  .encabezado__titulo {
    font-size: 15px;
  }

  .encabezado__acciones {
    grid-template-columns: 1fr;
  }

  .correo-label {
    display: none;
  }
}
</style>