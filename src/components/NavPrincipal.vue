<script setup>
import { ref } from 'vue'
import { menuItems } from '../data/siteData.js'

const menuAbierto = ref(false)
const dropdownAbierto = ref(null)

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value
}

function toggleDropdown(index) {
  if (window.innerWidth <= 768) {
    dropdownAbierto.value = dropdownAbierto.value === index ? null : index
  }
}
</script>

<template>
  <nav class="nav-principal">
    <button class="nav-toggle" @click="toggleMenu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      Menu Principal
    </button>
    <div class="nav-principal__inner" :class="{ abierto: menuAbierto }">

      <div class="nav-item">
        <a href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
      </div>

      <div
        v-for="(item, i) in menuItems"
        :key="i"
        class="nav-item"
        :class="{ abierto: dropdownAbierto === i }"
        @click="toggleDropdown(i)"
      >
        <a href="#">{{ item.label }} <span class="flecha">&#9660;</span></a>
        <div class="nav-dropdown">
          <a
            v-for="(child, j) in item.children"
            :key="j"
            :href="child.href"
            :target="child.external ? '_blank' : undefined"
            :rel="child.external ? 'noopener' : undefined"
          >{{ child.label }}</a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.nav-principal {
  background: var(--azul);
  position: sticky;
  top: 112px;
  z-index: 998;
}
.nav-principal__inner {
  max-width: var(--max-ancho);
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  padding: 0 24px;
}
.nav-item { position: relative; }
.nav-item > a {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 14px 18px;
  color: rgba(255,255,255,0.88);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all var(--transicion);
}
.nav-item > a:hover,
.nav-item:hover > a {
  color: var(--blanco);
  background: rgba(255,255,255,0.07);
  border-bottom-color: var(--dorado);
}
.flecha {
  font-size: 10px;
  transition: transform var(--transicion);
}
.nav-item:hover > a .flecha { transform: rotate(180deg); }

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background: var(--blanco);
  border-radius: 0 0 var(--radio) var(--radio);
  box-shadow: var(--sombra-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: all var(--transicion);
  z-index: 100;
  border-top: 3px solid var(--dorado);
}
.nav-item:hover .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.nav-dropdown a {
  display: block;
  padding: 11px 20px;
  font-size: 14px;
  color: var(--gris-700);
  border-bottom: 1px solid var(--gris-100);
  transition: all var(--transicion);
}
.nav-dropdown a:last-child { border-bottom: none; }
.nav-dropdown a:hover {
  background: var(--gris-100);
  color: var(--azul);
  padding-left: 24px;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--blanco);
  font-size: 14px;
  font-weight: 600;
  padding: 14px 20px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  gap: 8px;
  align-items: center;
}

@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-principal__inner {
    flex-direction: column;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .nav-principal__inner.abierto { max-height: 80vh; overflow-y: auto; }
  .nav-item > a { padding: 12px 20px; border-bottom-color: transparent; }
  .nav-dropdown {
    position: static;
    box-shadow: none;
    border-top: none;
    background: var(--azul-oscuro);
    border-radius: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }
  .nav-item.abierto .nav-dropdown { max-height: 400px; opacity: 1; visibility: visible; }
  .nav-dropdown a { color: rgba(255,255,255,0.75); border-bottom-color: rgba(255,255,255,0.05); padding-left: 36px; }
  .nav-dropdown a:hover { background: rgba(255,255,255,0.05); color: var(--blanco); }
}
</style>
