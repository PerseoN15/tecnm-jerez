export const menuItems = [
  {
    label: 'Conocenos',
    children: [
      { label: 'Nuestra Historia', href: 'pdf/Historia1.pdf', external: true },
      { label: 'Mision y Vision', href: '#' },
      { label: 'Directorio', href: '#' },
      { label: 'Objetivos Institucionales', href: 'pdf/OBJETIVOS-INSTITUCIONALES-Y-DE-CARRERAS-1.pdf', external: true }
    ]
  },
  {
    label: 'Oferta Educativa',
    children: [
      { label: 'Ing. en Sistemas Computacionales', href: 'ISC.html' },
      { label: 'Ing. en Industrias Alimentarias', href: 'IIA.html' },
      { label: 'Ing. en Mecatronica', href: 'IM.html' },
      { label: 'Lic. en Administracion', href: 'LA.html' },
      { label: 'Contador Publico', href: 'CP.html' },
      { label: 'Posgrado', href: 'Pos.html' },
      { label: 'Educacion a Distancia', href: 'https://educacionadistanciatecjerez.com', external: true }
    ]
  },
  {
    label: 'Alumnos',
    children: [
      { label: 'Control Escolar', href: 'http://itscontrol2.ddns.net/cloud/site/login.do', external: true },
      { label: 'Evaluacion Docente', href: '#' },
      { label: 'E-Libro', href: 'https://elibro.net/es/lc/jerez/login_usuario/', external: true },
      { label: 'Revistas Taylor & Francis', href: 'https://www.tandfonline.com/', external: true }
    ]
  },
  {
    label: 'Servicios Escolares',
    children: [
      { label: 'Inscripcion Nuevo Ingreso', href: 'pdf/Escolares/1. Requisitos inscripcion nuevo ingreso-1.pdf', external: true },
      { label: 'Constancia o Kardex', href: 'pdf/Escolares/2. Solicitud constancia o kardex.pdf', external: true },
      { label: 'Guia de Acceso a Control Escolar', href: 'pdf/Escolares/GUIA-ACCESO-CIE-H-ESTUDIANTES-2-1.pdf', external: true },
      { label: 'Certificado Parcial o Total', href: 'pdf/Escolares/4. Requisitos para certificado parcial o total.pdf', external: true },
      { label: 'Cedula Electronica', href: 'pdf/Escolares/7. Requisitos cedula electronica.pdf', external: true },
      { label: 'Acto Recepcional Licenciatura', href: 'pdf/Escolares/5. Requisitos acto recepcional licenciatura.pdf', external: true },
      { label: 'Acto Recepcional Posgrado', href: 'pdf/Escolares/6. Requisitos acto recepcional posgrado.pdf', external: true }
    ]
  },
  {
    label: 'Convocatorias',
    children: [
      { label: 'Convocatoria Escolarizada 2026', href: 'pdf/convocatorias/licenciaturaEscolarizada.pdf', external: true }
    ]
  },
  {
    label: 'Transparencia',
    children: [
      { label: 'Aviso de Privacidad Integral', href: 'pdf/Transparencia/Aviso_de_Privacidad_Integral_ITSJ.pdf', external: true },
      { label: 'Aviso de Privacidad Simplificado', href: 'pdf/Transparencia/Aviso_de_privacidad_Simplificado_ITSJ.pdf', external: true },
      { label: 'Cuenta Publica', href: '#' }
    ]
  },
  {
    label: 'Lineamientos',
    children: [
      { label: 'Reglamento General', href: 'pdf/Lineamientos/Reglamento_General.pdf', external: true },
      { label: 'Titulacion Integral', href: 'pdf/Lineamientos/Titulacion_Integral,pdf', external: true },
      { label: 'Movilidad Estudiantil', href: 'pdf/Lineamientos/Movilidad_Estudiantil.pdf', external: true },
      { label: 'Residencia Profesional', href: 'pdf/Lineamientos/Operacion_y_Acreditacion_de_la_Residencia_Profesional.pdf', external: true }
    ]
  }
]

export const carreras = [
  {
    nombre: 'Ingenieria en Sistemas Computacionales',
    descripcion: 'Desarrollo de software, redes, bases de datos e inteligencia artificial.',
    href: 'ISC.html',
    icono: 'code',
    gradiente: 'linear-gradient(135deg, #1B396A 0%, #2A5298 100%)'
  },
  {
    nombre: 'Ingenieria en Mecatronica',
    descripcion: 'Automatizacion, robotica, electronica y sistemas de control.',
    href: 'IM.html',
    icono: 'gear',
    gradiente: 'linear-gradient(135deg, #2A5298 0%, #1B396A 100%)'
  },
  {
    nombre: 'Ingenieria en Industrias Alimentarias',
    descripcion: 'Procesamiento, conservacion y calidad de alimentos.',
    href: 'IIA.html',
    icono: 'layers',
    gradiente: 'linear-gradient(135deg, #1B396A 0%, #122847 100%)'
  },
  {
    nombre: 'Licenciatura en Administracion',
    descripcion: 'Gestion empresarial, finanzas, mercadotecnia y capital humano.',
    href: 'LA.html',
    icono: 'monitor',
    gradiente: 'linear-gradient(135deg, #122847 0%, #2A5298 100%)'
  },
  {
    nombre: 'Contador Publico',
    descripcion: 'Contabilidad, auditoria, fiscal y gestion financiera.',
    href: 'CP.html',
    icono: 'dollar',
    gradiente: 'linear-gradient(135deg, #1B396A 0%, #2A5298 100%)'
  },
  {
    nombre: 'Posgrado',
    descripcion: 'Maestria en Ingenieria Industrial con reconocimiento CONAHCYT.',
    href: 'Pos.html',
    icono: 'graduation',
    gradiente: 'linear-gradient(135deg, #C9A227 0%, #A88420 100%)'
  }
]

export const servicios = [
  { nombre: 'Control Escolar', href: 'http://itscontrol2.ddns.net/cloud/site/login.do', icono: 'grid', external: true },
  { nombre: 'Correo Institucional', href: 'https://login.microsoftonline.com/?whr=tecnm.mx', icono: 'mail', external: true },
  { nombre: 'SGI-3', href: 'http://calidad3.ddns.net/sgi-3', icono: 'login', external: true },
  { nombre: 'E-Libro', href: 'https://elibro.net/es/lc/jerez/login_usuario/', icono: 'book', external: true },
  { nombre: 'Revistas T&F', href: 'https://www.tandfonline.com/', icono: 'books', external: true },
  { nombre: 'Educacion a Distancia', href: 'https://educacionadistanciatecjerez.com', icono: 'globe', external: true }
]

export const documentos = [
  { nombre: 'Codigo de Etica', href: 'pdf/anexos/SFP-CE-2019_Codigo_de_Etica.pdf' },
  { nombre: 'Pronunciamiento de no Discriminacion', href: 'pdf/anexos/Pronunciamiento.pdf' },
  { nombre: 'Protocolo de Prevencion', href: 'pdf/anexos/Protocolo_HSyAS.pdf' },
  { nombre: 'Estrategias de Austeridad', href: 'pdf/anexos/estrategias_austeridad.pdf' },
  { nombre: 'Decreto de Creacion TecNM', href: 'pdf/anexos/decreto_tecnm.pdf' },
  { nombre: 'PRODEP - Que es el S247', href: 'pdf/PRODEP/QUE ES EL S247 2025.pdf' }
]

export const sitiosInteres = [
  { nombre: 'CONAHCYT', href: 'https://www.conacyt.gob.mx/', img: 'img/interes/CONACYT.png' },
  { nombre: 'CONRICYT', href: 'https://www.conricyt.mx/', img: 'img/interes/CONRICYT.png' },
  { nombre: 'INAI', href: 'http://www.ifai.org.mx/', img: 'img/interes/INAI.png' },
  { nombre: 'Gobierno de Zacatecas', href: 'https://www.zacatecas.gob.mx/', img: 'img/logos/logozac.jpg' },
  { nombre: 'TecNM', href: 'https://www.tecnm.mx/', img: 'img/logos/tecnm.jpg' }
]

export const heroSlides = [
  {
    etiqueta: 'Convocatoria Abierta',
    titulo: 'Inscripciones Escolarizadas 2026',
    subtitulo: 'Forma parte de la comunidad TecNM Campus Jerez. Ofrecemos programas de licenciatura e ingenieria con calidad educativa.',
    cta: 'Ver convocatoria',
    href: 'pdf/convocatorias/licenciaturaEscolarizada.pdf',
    gradiente: 'linear-gradient(135deg, #1B396A 0%, #2A5298 50%, #1B396A 100%)'
  },
  {
    etiqueta: 'Posgrado',
    titulo: 'Maestria en Ingenieria Industrial',
    subtitulo: 'Impulsa tu carrera profesional con nuestro programa de posgrado reconocido por CONAHCYT.',
    cta: 'Conocer mas',
    href: 'Pos.html',
    gradiente: 'linear-gradient(135deg, #122847 0%, #1B396A 50%, #2A5298 100%)'
  },
  {
    etiqueta: 'Modelo Educativo',
    titulo: 'Tecnologia y Calidad para la Vida',
    subtitulo: 'Educacion integral con enfoque en innovacion, emprendimiento y desarrollo sustentable.',
    cta: 'Explorar',
    href: 'https://www.tecnm.mx/',
    gradiente: 'linear-gradient(135deg, #2A5298 0%, #1B396A 50%, #122847 100%)'
  }
]
