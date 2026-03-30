<template>
  <header class="barra-gob">
    <a href="https://www.gob.mx/" target="_blank" rel="noopener">
      <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg" alt="Gobierno de Mexico" loading="eager">
    </a>
    <div class="barra-gob__derecha">
      <a href="https://www.gob.mx/tramites" target="_blank" class="barra-gob__link" rel="noopener">Tramites</a>
      <a href="https://www.gob.mx/gobierno" target="_blank" class="barra-gob__link" rel="noopener">Gobierno</a>
    </div>
  </header>
</template>

<style scoped>
.barra-gob {
  background: var(--verde-gob);
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.barra-gob a { display: flex; align-items: center; }
.barra-gob img { height: 20px; }
.barra-gob__derecha {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
}
.barra-gob__link {
  color: var(--blanco);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  opacity: 0.9;
}
.barra-gob__link:hover { opacity: 1; }
</style>
