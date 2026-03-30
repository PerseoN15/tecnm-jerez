<script setup>
import BarraGobierno from './components/BarraGobierno.vue'
import EncabezadoInstitucional from './components/EncabezadoInstitucional.vue'
import NavPrincipal from './components/NavPrincipal.vue'
import BuscadorModal from './components/BuscadorModal.vue'
import HeroSlider from './components/HeroSlider.vue'
import CifrasRapidas from './components/CifrasRapidas.vue'
import SeccionNoticias from './components/SeccionNoticias.vue'
import OfertaEducativa from './components/OfertaEducativa.vue'
import ServiciosRapidos from './components/ServiciosRapidos.vue'
import DocumentosNormatividad from './components/DocumentosNormatividad.vue'
import RedesSociales from './components/RedesSociales.vue'
import SitiosInteres from './components/SitiosInteres.vue'
import FooterInstitucional from './components/FooterInstitucional.vue'
import BarraGobFooter from './components/BarraGobFooter.vue'
import { ref } from 'vue'

const buscadorAbierto = ref(false)
</script>

<template>
  <BarraGobierno />
  <EncabezadoInstitucional @abrir-buscador="buscadorAbierto = true" />
  <NavPrincipal />
  <BuscadorModal v-model="buscadorAbierto" />
  <main>
    <HeroSlider />
    <CifrasRapidas />
    <SeccionNoticias />
    <OfertaEducativa />
    <ServiciosRapidos />
    <DocumentosNormatividad />
    <RedesSociales />
    <SitiosInteres />
  </main>
  <FooterInstitucional />
  <BarraGobFooter />
</template>
