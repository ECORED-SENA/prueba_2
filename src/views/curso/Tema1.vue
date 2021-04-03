<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="1. Servicios Turísticos")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    figure
      img(src="@/assets/curso/tema1/tema1-main.jpg")

    .row.justify-content-between.mt-5
      .col-12.col-md-6
        p Al hablar de servicios turísticos nos referimos a los bienes y servicios ofrecidos por las empresas del mercado turístico y que satisfacen las necesidades de los turistas en la organización de viajes y mediante el disfrute de estos; de esta forma el servicio turístico está directamente encargado de satisfacer la demanda turística de personas que se desplazan de un lugar a otro, con el fin de hacer actividades ajenas a su rutina (turísticas).

        p El turismo se fundamenta en un sistema de relaciones entre el sujeto (turista) y el objeto (destino, prestadores, organización). Para el turista, el turismo es el conjunto de servicios que le son facilitados por los prestadores de servicios turísticos y para estos el turista es el destinatario de los servicios que ofrece.
      .col-12.col-md-5
        img(src="@/assets/curso/tema1/tema1.jpg")

    .custom-alert.container.tarjeta.tarjeta__template--naranja.px-3.pt-3.pb-2.px-sm-5.my-5
      .float-image.d-none.d-lg-block
        img.auto(src="@/assets/curso/tema1/advertir.png")
      .ms-lg-5.ps-lg-5 
        p.ms-lg-5 <strong>Servicios turísticos:</strong> es el conjunto de actividades perfectamente diferenciadas entre sí, pero íntimamente relacionadas, que funcionan en forma armónica y coordinada con el propósito de responder a las exigencias de servicios que, en un destino, generan  una corriente turística.
    
    p Este va de la mano con el conjunto de interacciones humanas, <strong>como transportes, hospedaje, alimentación, diversiones, aprendizajes, derivados de los desplazamientos transitorios, temporales o de transeúntes</strong> de fuertes núcleos  de población con propósitos diversos y múltiples deseos humanos, que abarcan una gama amplia  de motivaciones de viaje.

    p El servicio turístico comprende el conjunto de técnicas relativas a la transferencia y venta de bienes turísticos del productor al consumidor.  Constituye la política de entidades turísticas en relación con <strong>la oferta, la demanda y la preparación del producto turístico para la venta</strong>, distribución, comercialización  y satisfacción óptima de necesidades de un segmento determinado de consumidores (Novas, 2006).

    p.fw-bold.my-5 Servicios turístico:
    .row
      .col-6.col-md.text-center
        figure(style="height: 170px")
          img.auto.m-auto(src="@/assets/curso/tema1/servicios5.png")
        p.fw-bold Tours y excursiones
      .col-6.col-md.text-center
        figure(style="height: 170px")
          img.auto.m-auto(src="@/assets/curso/tema1/servicios1.png")
        p.fw-bold Transporte
      .col-6.col-md.text-center
        figure(style="height: 170px")
          img.auto.m-auto(src="@/assets/curso/tema1/servicios2.png")
        p.fw-bold Alojamiento
      .col-6.col-md.text-center
        figure(style="height: 170px")
          img.auto.m-auto(src="@/assets/curso/tema1/servicios3.png")
        p.fw-bold Agencia de viajes
      .col-6.col-md.text-center
        figure(style="height: 170px")
          img.auto.m-auto(src="@/assets/curso/tema1/servicios4.png")
        p.fw-bold Restaurantes
      

    .row.justify-content-between.mt-5
      .col-12.col-md-6
        p Para la prestación de servicios turísticos es necesario conocer el funcionamiento del sistema turístico, que se define como el conjunto de elementos interrelacionados entre sí que evolucionan de forma dinámica para configurar la naturaleza de la actividad turística, conformado por cinco  subsistemas:

      .col-12.col-md-5
        ul
          li Estructura turística (planta turística).
          li Infraestructura turística.
          li Superestructura turística.
          li Oferta turística.
          li Demanda turística.

    Slider#slider-tema1
      .tarjeta.tarjeta__template--azul-claro.px-5.py-4
          .row.align-items-center.px-lg-5
            .col-12.col-md-3
              img.auto(src="@/assets/curso/tema1/estructura.png")
            .col-12.col-md
              p.fw-bold Estructura Turística
              p Denominada también planta turística hace posible la permanencia del turista o visitante en el lugar de destino. <strong>Está conformada por  el conjunto de atractivos turísticos, instalaciones y equipamiento encargados</strong>, de la prestación de servicios al turista, ofreciendo comodidad en el destino visitado, para satisfacer las necesidades y superar sus expectativas en términos de calidad (Boullon, 2006).
      .tarjeta.tarjeta__template--azul-claro.px-5.py-4
          .row.align-items-center.px-lg-5
            .col-12.col-md-3
              img.auto(src="@/assets/curso/tema1/infraestructura.png")
            .col-12.col-md
              p.fw-bold Infraestructura turística
              p Es el conjunto de bienes y servicios con los que cuenta un destino turístico para contribuir a la satisfacción de las necesidades y expectativas de los turistas, <strong>facilitando la accesibilidad y desplazamiento al lugar de destino, como vías de comunicación, terminales de transporte</strong> (aéreo, terrestre, ferroviario, marítimo, fluvial y lacustre), sistemas de comunicación (satelital, telefonía, acceso a la red), sistema de sanidad (acueducto, alcantarillado, recolección de basuras, primeros auxilios y servicios hospitalarios) y servicios de energía eléctrica (red eléctrica, alumbrado público, domiciliario).

      .tarjeta.tarjeta__template--azul-claro.px-5.py-4
          .row.align-items-center.px-lg-5
            .col-12.col-md-3
              img.auto(src="@/assets/curso/tema1/superestructura.png")
            .col-12.col-md
              p.fw-bold Superestructura turística
              p Está conformada por todos los organismos oficiales, mixtos y privados que se encargan de la regulación del Sistema Turístico (normatividad, legislación turística). <strong>Con el fin de lograr la optimización, facilitación, producción y venta de los  servicios</strong> que integran la actividad turística (Ministerio de Industria Comercio y Turismo, Dirección Nacional de Turismo, PROCOLOMBIA, FONTUR, ANATO, ACODRES, clústeres de turismo).
      
      .tarjeta.tarjeta__template--azul-claro.px-5.py-4
          .row.align-items-center.px-lg-5
            .col-12.col-md-3
              img.auto(src="@/assets/curso/tema1/oferta.png")
            .col-12.col-md
              p.fw-bold Oferta turística
              p Es el conjunto de productos y servicios asociados a un determinado espacio geográfico y sociocultural, <strong>que permite facilitar y propiciar el aprovechamiento de los atractivos turísticos de ese lugar</strong> y cuyos oferentes pueden  vender en el mercado a un precio  establecido y en un periodo de tiempo determinado, para ser usado o consumido por los turistas.
      
      .tarjeta.tarjeta__template--azul-claro.px-5.py-4
          .row.align-items-center.px-lg-5
            .col-12.col-md-3
              img.auto(src="@/assets/curso/tema1/demanda.png")
            .col-12.col-md
              p.fw-bold Demanda turística
              p Se define como el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades; <strong>opera en el contexto de un mercado en el que intervienen diversos prestadores de servicios</strong> turísticos que ponen a disposición del turista los  servicios y productos que requieren para satisfacer determinadas necesidades (viajes, ocio, vacaciones, esparcimiento, tiempo libre).  

              p Desde el punto de vista económico <strong>la oferta turística está dada por  bienes o  servicios</strong>, que son comercializados como producto turístico.
    
    p.mt-5.pt-5 Producto turístico lo integra la sumatoria de los  atractivos turísticos, los servicios de la planta turística y la accesibilidad dentro de un destino, que integrados logran satisfacer las necesidades y motivaciones del turista.

    p Todos estos elementos que conforman el producto turístico se resumen en tres:

    .mt-5 .
    .row.my-5.justify-content-between
      .col-12.col-md-5
        p <strong class="h6">Atractivos turísticos.</strong><br/> Son todos aquellos elementos naturales, bienes creados por la mano del hombre y hechos sociales que crean el interés de ser conocidos y permiten su disfrute.
      .col-12.col-md-6
        img(src="@/assets/curso/tema1/atractivo.jpg")
    .row.my-5.justify-content-between
      .col-12.col-md-5
        img(src="@/assets/curso/tema1/servicios.jpg")
      .col-12.col-md-6        
        p <strong class="h6">Servicios turísticos o planta turística.</strong><br/> Son el conjunto de medios y actividades que facilitan la estancia y el bienestar del viajero, convergiendo en ellos elementos tangibles e intangibles, los cuales son en su etapa final de consumo, interdependientes (Instituto Distrital de Turismo ANATO Asociación Colombiana de Agencias de Viajes y Turismo, 2007).
    .row.my-5.justify-content-between
      .col-12.col-md-5
        p <strong class="h6">Accesibilidad.</strong><br/> La accesibilidad en el diseño de producto hace relación solamente a las vías de comunicación que se dispone para acceder al destino y a cada uno de los lugares de interés..

      .col-12.col-md-6
        img(src="@/assets/curso/tema1/accesibilidad.jpg")

    #table-header.bg-color-curso-n
      .h3.text-center.py-1 Producto turístico

    #table-body.row.align-items-stretch
      .col-12.col-md-4.bg-azul-claro
        .p-4
          .h6.text-center Atractivos turísticos.
          ul
            li Sitios naturales.
            li Manifestaciones culturales.
            li Hechos históricos.
            li Museos.
            li Folclor.
            li Acontecimientos programados - eventos.
            li Realizaciones técnicas, cientificas o artísticas contemporanea.
      .col-12.col-md-4.bg-color-curso-n
        .p-4
          .h6.text-center Servicios turísticos o planta turística.
          ul
            li Alojamiento.
            li Restauración.
            li Esparcimiento y diversión.
            li Agencias de viajes.
            li Guías de turismo.
            li Puntos de información turística.
      .col-12.col-md-4.bg-azul-claro
        .p-4
          .h6.text-center Accesibilidad.
          ul
            li Transporte.
            li Comunicación.
            li Servicios Públicos.

    figure.my-5
      img(src="@/assets/curso/tema1/video.jpg")

    .pt-3
    Tabs
      .p-5(titulo="The splendor of the mystery")
        .row.justify-content-between.align-items-center
          .col-12.col-md-5
            img.mx-auto(src="@/assets/curso/tema1/tab1.jpg")
          .col-12.col-md-6
            .h3 Saul Bass on failure: Failure is built into creativity
            p Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor

            p Eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla l tempus convallis quis

            p Aclectus proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh porttitor volutpat Vivamus suscipit tortor eget felis.
      .p-5(titulo="Don’t fucking lie to yourself")
        .row.justify-content-between.align-items-center
          .col-12.col-md-5
            img.mx-auto(src="@/assets/curso/tema1/tab2.jpg")
          .col-12.col-md-6
            .h3 Saul Bass on failure: Failure is built into creativity
            p Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor

            p Eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla l tempus convallis quis

            p Aclectus proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh porttitor volutpat Vivamus suscipit tortor eget felis.
      .p-5(titulo="Don’t fucking quit")
        .row.justify-content-between.align-items-center
          .col-12.col-md-5
            img.mx-auto(src="@/assets/curso/tema1/tab3.jpg")
          .col-12.col-md-6
            .h3 Saul Bass on failure: Failure is built into creativity
            p Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor

            p Eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla l tempus convallis quis

            p Aclectus proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh porttitor volutpat Vivamus suscipit tortor eget felis.
      .p-5(titulo="Even with the odds against")
        .row.justify-content-between.align-items-center
          .col-12.col-md-5
            img.mx-auto(src="@/assets/curso/tema1/tab4.jpg")
          .col-12.col-md-6
            .h3 Saul Bass on failure: Failure is built into creativity
            p Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor

            p Eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla l tempus convallis quis

            p Aclectus proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh porttitor volutpat Vivamus suscipit tortor eget felis.

    
</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
import Slider from '../../components/Slider'
import Tabs from '../../components/Tabs'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    Slider,
    Tabs,
  },
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped>
#table-header
  margin-bottom: 5px
  border-top-left-radius: 20px
  border-top-right-radius: 20px

  .h3
    margin-bottom: 0

#table-body
  padding: 0 12px

  .col-12:first-child
    border-bottom-left-radius: 20px

  .col-12:last-child
    border-bottom-right-radius: 20px
</style>
