<template>
  <div class="text-wrapper">
    <div class="header">
      <h1 :class="textColor">Kokkos</h1>
      <h2 :class="textColor">nettsider og apper</h2>
      <Fade>
        <slot />
      </Fade>
    </div>
    <div class="text">
      <p :class="textColor">
        Trenger du en
        <PopperPopup
          :highlight="highlight"
          referenceElement="teknisk"
          popperContent="Vi 😍 Typescript, Vue, Gridsome, GraphQL, Apollo, Hasura, 
          PostgreSQL, Sanity CSM, Netlify, GTM, Fullstory, Sentry, Figma, Notion, 
          Tandem og Slack"
        />&nbsp;partner som kan lage en kul nettside eller en teit app?
      </p>
    </div>
    <div class="text">
      <p :class="textColor">
        Vi har laget
        <PopperPopup
          :highlight="highlight"
          referenceElement="gøye"
          popperContent="Freia ville ha et klassisk Snake spill på Snapchat. Craycray! TL;DR
          Snap utviklingsplattformen er ikke laget for å utvikle ordentlige
          spill. Ikke noe konsept av tid, skjermstørrelser eller
          kollisjonsdetektering. Men vi klarte å levere et suksessfult spill til
          hundretusener innen fristen fordi vi er sinnsykt flinke."
        />&nbsp;og
        <PopperPopup
          :highlight="highlight"
          referenceElement="seriøse"
          popperContent="Ende-til-ende kryptert chat app, boliglånsskjema, CRM system,
          nettbutikk, karttjeneste og diverse CRUD apper, selskapsportfolioer og
          enklere blogger."
        />&nbsp;nettsider for Ruter, Gjensidige, Urban Sharing, Freia ++ fra
        Oslo, San Jose, Chiang Mai og Bali
        <PopperPopup
          :highlight="highlight"
          referenceElement="fordi"
          popperContent="Å tilby remote arbeid er det enkleste trikset for å tiltrekke de
          flinkeste folka. Kontorer fragmenterer dagen til bruddstykker av
          arbeid, som fungerer dårlig for utvikling. Remote arbeid gir lange
          uavbrutte strekk med arbeid der det passer deg best. Det blir
          morsommere å jobbe og alle undersøkelser viser at folk trives mer og
          jobber bedre 🤗."
        />
      </p>
    </div>
    <div :class="textColor" class="contact">
      <ChatMessenger :chatColor="textColor" />
      <p :class="textColor">eller</p>
      <a :class="textColor" href="mailto:hei@kokkos.io">hei@kokkos.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import PopperPopup from "@/components/PopperPopup.vue";
import Fade from "@/components/Fade.vue";
import ChatlioChat from "@/components/ChatlioChat.vue";
import ChatMessenger from "@/components/ChatMessenger.vue";
@Component({
  components: {
    PopperPopup,
    Fade,
    ChatlioChat,
    ChatMessenger
  },
  props: {
    textColor: {
      type: Object
    },
    highlight: {
      type: Object
    }
  }
})
export default class NorwText extends Vue {}
</script>
