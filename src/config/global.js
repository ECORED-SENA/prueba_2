export const global = {
  programaFormacion: 'Técnico en Servicios de Recepción Hotelera',
  componenteFormativo: 'Gestión de reservas hoteleras.',
  descripcionCurso:
    '¡Bienvenido al componente formativo 2 Gestión de Reservas Hoteleras, que ha sido diseñado para que usted conozca los servicios turísticos e interactúe dentro del sistema turístico, identificando los elementos que lo integran  y la importancia que tienen en el desarrollo de la industria hotelera.',
  imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Servicios turísticos.',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Portafolio de servicios.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Características',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Tipos',
          hash: 't_2_2',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Reservas.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Objetivo de la gestión de reservas',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Componentes',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Tipos',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Estados',
          hash: 't_3_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.5',
          titulo: 'Convenciones de estados de habitaciones',
          hash: 't_3_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.6',
          titulo: 'Procedimiento para reservar',
          hash: 't_3_6',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.7',
          titulo: 'Control de disponibilidad',
          hash: 't_3_7',
        },
      ],
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Área de reservas.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '4.1',
          titulo: 'Funciones',
          hash: 't_4_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.2',
          titulo: 'Cualidades del personal de reservas',
          hash: 't_4_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.3',
          titulo: 'Sistemas de reserva',
          hash: 't_4_3',
        },
      ],
    },
    {
      nombreRuta: 'tema5',
      icono: 'far fa-file-alt',
      numero: '5',
      titulo: 'Tarifas.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '5.1',
          titulo: 'Tipos',
          hash: 't_5_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.2',
          titulo: 'Planes',
          hash: 't_5_2',
        },
      ],
    },
    {
      nombreRuta: 'tema6',
      icono: 'far fa-file-alt',
      numero: '6',
      titulo: 'Negociación.',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '6.1',
          titulo: 'Tipos',
          hash: 't_6_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '6.2',
          titulo: 'Etapas',
          hash: 't_6_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '6.3',
          titulo: 'Técnicas',
          hash: 't_6_3',
        },
      ],
    },
  ],
  subMenu: [
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Ingry Dayanna Bonilla Monzon',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Astrid Lili Puerta',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julieth Paola Vital López',
      cargo: 'Revisora de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Blackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
  },
  {
    referencia:
      'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
  },
  {
    referencia:
      'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    link:
      'https://www.harpersbazaar.mx/belleza/salud-y-bienestar/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos/',
  },
  {
    referencia:
      'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
  },
  {
    referencia:
      'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000063748',
  },
  {
    referencia:
      'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
  },
  {
    referencia:
      'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
  },
  {
    referencia:
      'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
  },
]

export const glosario = [
  {
    termino: 'MoodBoard',
    significado:
      'su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
  },
  {
    termino: 'Suftware',
    significado:
      'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
  },
  {
    termino: 'Pirognóstico',
    significado:
      'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
  },
  {
    termino: 'Vectores',
    significado:
      'en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos.',
  },
  {
    termino: 'Moda',
    significado:
      'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
  },
  {
    termino: 'Diseño',
    significado:
      'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
  },
  {
    termino: 'Tipología',
    significado:
      'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
  },
  {
    termino: 'Bidimensional',
    significado:
      'que se representa según su altura y su anchura y no su profundidad.',
  },
  {
    termino: 'Software',
    significado:
      'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]
