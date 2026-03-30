<script setup>
import { useScrollObserver } from '../composables/useScrollObserver.js'
useScrollObserver()
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <div class="seccion__header animado">
        <div class="seccion__etiqueta">Comunicacion</div>
        <h2 class="seccion__titulo">Noticias y Avisos</h2>
        <div class="seccion__linea"></div>
      </div>
      <div class="noticias-grid">
        <a href="pdf/convocatorias/licenciaturaEscolarizada.pdf" target="_blank" class="noticia-destacada animado">
          <div class="noticia-destacada__img">
            <div class="noticia-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
          </div>
          <div class="noticia-destacada__body">
            <div class="noticia-destacada__tag">Convocatoria</div>
            <h3 class="noticia-destacada__titulo">Convocatoria Escolarizada 2026</h3>
            <p class="noticia-destacada__texto">Se abre el periodo de inscripciones para todas las carreras de licenciatura e ingenieria en modalidad escolarizada.</p>
            <div class="noticia-destacada__fecha">Marzo 2026</div>
          </div>
        </a>
        <a href="#" class="noticia-mini animado">
          <div class="noticia-mini__img">
            <div class="mini-placeholder mini-placeholder--dorado">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--azul)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
          </div>
          <div>
            <div class="noticia-mini__tag">Aviso</div>
            <div class="noticia-mini__titulo">Encuesta Estudiantes de Nuevo Ingreso</div>
            <div class="noticia-mini__fecha">Marzo 2026</div>
          </div>
        </a>
        <a href="#" class="noticia-mini animado">
          <div class="noticia-mini__img">
            <div class="mini-placeholder mini-placeholder--gris">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--azul)" stroke-width="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
          </div>
          <div>
            <div class="noticia-mini__tag">Institucional</div>
            <div class="noticia-mini__titulo">Violentometro - Espacios Libres de Violencia</div>
            <div class="noticia-mini__fecha">2026</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.noticias-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.noticia-destacada {
  grid-row: span 2;
  border-radius: var(--radio);
  overflow: hidden;
  background: var(--blanco);
  box-shadow: var(--sombra-md);
  transition: all var(--transicion);
}
.noticia-destacada:hover { box-shadow: var(--sombra-lg); transform: translateY(-3px); }
.noticia-destacada__img { height: 280px; overflow: hidden; }
.noticia-placeholder {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, var(--azul) 0%, var(--azul-claro) 100%);
  display: flex; align-items: center; justify-content: center;
  color: white;
}
.noticia-destacada__body { padding: 28px; }
.noticia-destacada__tag {
  display: inline-block;
  padding: 3px 10px;
  background: var(--dorado-claro);
  color: var(--azul);
  font-size: 11px;
  font-weight: 700;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}
.noticia-destacada__titulo {
  font-family: 'Playfair Display', serif;
  font-size: 22px; font-weight: 700;
  color: var(--gris-900); line-height: 1.3; margin-bottom: 10px;
}
.noticia-destacada__texto { font-size: 15px; color: var(--gris-700); line-height: 1.6; }
.noticia-destacada__fecha { font-size: 13px; color: var(--gris-500); margin-top: 16px; }

.noticia-mini {
  display: flex; gap: 20px; padding: 20px;
  background: var(--blanco); border-radius: var(--radio);
  box-shadow: var(--sombra-sm); transition: all var(--transicion);
  border: 1px solid transparent;
}
.noticia-mini:hover { border-color: var(--azul-claro); box-shadow: var(--sombra-md); }
.noticia-mini__img { width: 120px; height: 90px; border-radius: 4px; overflow: hidden; flex-shrink: 0; }
.mini-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.mini-placeholder--dorado { background: var(--dorado-claro); }
.mini-placeholder--gris { background: var(--gris-200); }
.noticia-mini__tag { font-size: 11px; font-weight: 700; color: var(--dorado); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
.noticia-mini__titulo { font-size: 16px; font-weight: 600; color: var(--gris-900); line-height: 1.3; margin-bottom: 4px; }
.noticia-mini__fecha { font-size: 13px; color: var(--gris-500); }

@media (max-width: 1024px) {
  .noticias-grid { grid-template-columns: 1fr; }
  .noticia-destacada { grid-row: auto; }
}
</style>
