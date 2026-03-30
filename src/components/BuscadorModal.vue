<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)

watch(() => props.modelValue, async (val) => {
  if (val) {
    await nextTick()
    inputRef.value?.focus()
  }
})

function cerrar() {
  emit('update:modelValue', false)
}

function onKeydown(e) {
  if (e.key === 'Escape') cerrar()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div class="buscador-modal" :class="{ abierto: modelValue }" @click.self="cerrar">
      <button class="buscador-modal__cerrar" @click="cerrar">&times;</button>
      <div class="buscador-modal__inner">
        <form action="Buscar" method="POST">
          <input
            ref="inputRef"
            type="text"
            name="buscar"
            placeholder="Buscar en TecNM Jerez..."
            autocomplete="off"
          >
          <input type="hidden" name="btn_busqueda">
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.buscador-modal {
  position: fixed;
  inset: 0;
  background: rgba(18,40,71,0.92);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transicion);
  backdrop-filter: blur(8px);
}
.buscador-modal.abierto { opacity: 1; visibility: visible; }
.buscador-modal__inner {
  width: 90%;
  max-width: 640px;
  transform: translateY(-20px);
  transition: transform var(--transicion);
}
.buscador-modal.abierto .buscador-modal__inner { transform: translateY(0); }
.buscador-modal input {
  width: 100%;
  padding: 20px 24px;
  font-size: 22px;
  font-family: 'Source Sans 3', sans-serif;
  border: none;
  border-radius: var(--radio);
  outline: none;
  background: var(--blanco);
  color: var(--gris-900);
  box-shadow: var(--sombra-lg);
}
.buscador-modal input::placeholder { color: var(--gris-500); }
.buscador-modal__cerrar {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: var(--blanco);
  font-size: 32px;
  cursor: pointer;
  opacity: 0.7;
}
.buscador-modal__cerrar:hover { opacity: 1; }
</style>
