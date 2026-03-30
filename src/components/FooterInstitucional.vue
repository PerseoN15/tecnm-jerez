<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div>
        <h3 class="footer__titulo">Direccion</h3>
        <p>Libramiento Fresnillo-Tepetongo S/N<br>C.P. 99361, Campus Jerez<br>Jerez, Zacatecas, Mexico</p>
        <h3 class="footer__titulo" style="margin-top:28px;">Contacto</h3>
        <p>
          Conmutador: <a href="tel:4949451226">494 945 1226</a><br>
          Email: <a href="mailto:dir_jerez@tecnm.mx">dir_jerez@tecnm.mx</a>
        </p>
        <div class="footer__redes">
          <a href="https://www.facebook.com/tecjerez" target="_blank" rel="noopener" class="footer__red" title="Facebook">f</a>
          <a href="https://twitter.com/TecNM_MX" target="_blank" rel="noopener" class="footer__red" title="Twitter">X</a>
          <a href="https://youtube.com" target="_blank" rel="noopener" class="footer__red" title="YouTube">&#9654;</a>
        </div>
      </div>
      <div>
        <h3 class="footer__titulo">Enlaces</h3>
        <ul class="footer__enlaces">
          <li><a href="http://portaltransparencia.gob.mx/buscador/search/search.do?method=begin" target="_blank" rel="noopener">Portal de Transparencia</a></li>
          <li><a href="http://inicio.ifai.org.mx/SitePages/ifai.aspx" target="_blank" rel="noopener">INAI</a></li>
          <li><a href="https://www.gob.mx/cms/uploads/attachment/file/328462/Proyecto_Aviso_Privacidad_TecNM_16052018.pdf" target="_blank" rel="noopener">Aviso de Privacidad</a></li>
          <li><a href="mailto:dir_jerez@tecnm.mx">Buzon de Sugerencias</a></li>
          <li><a href="pdf/Lineamientos/Reglamento_General.pdf" target="_blank">Reglamento General</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__titulo">Ubicacion</h3>
        <div class="footer__mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.927234415429!2d-103.02008722590973!3d22.656501479432062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682eff731000001%3A0x791d2db6559b9fd!2sINSTITUTO%20TECNOLOGICO%20SUPERIOR%20DE%20JEREZ!5e0!3m2!1ses!2smx!4v1686843791062!5m2!1ses!2smx"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__copy">TecNM Campus Jerez &mdash; Ultima actualizacion: Marzo 2026</div>
      <a href="https://www.gob.mx/cms/uploads/attachment/file/328462/Proyecto_Aviso_Privacidad_TecNM_16052018.pdf" target="_blank" class="footer__privacidad" rel="noopener">Aviso de Privacidad</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--azul-oscuro);
  color: rgba(255,255,255,0.8);
  padding: 56px 24px 0;
}
.footer__inner {
  max-width: var(--max-ancho);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 48px;
}
.footer__titulo {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--blanco);
  margin-bottom: 18px;
}
.footer p,
.footer a { font-size: 14px; line-height: 1.8; }
.footer a { color: rgba(255,255,255,0.7); }
.footer a:hover { color: var(--dorado); }
.footer__enlaces li { margin-bottom: 6px; }
.footer__mapa {
  border-radius: var(--radio);
  overflow: hidden;
  height: 240px;
}
.footer__mapa iframe { width: 100%; height: 100%; border: none; }
.footer__redes {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.footer__red {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blanco);
  font-size: 16px;
  transition: all var(--transicion);
}
.footer__red:hover { background: var(--dorado); color: var(--azul-oscuro); }
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 40px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.footer__copy {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
}
.footer__privacidad { font-size: 13px; }

@media (max-width: 1024px) {
  .footer__inner { grid-template-columns: 1fr 1fr; }
  .footer__mapa { grid-column: span 2; height: 200px; }
}
@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr; }
  .footer__mapa { grid-column: auto; }
}
</style>
