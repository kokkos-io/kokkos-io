<template>
  <div class="text-wrapper">
    <div class="header">
      <h1 :class="textColor">Kokkos</h1>
      <h2 :class="textColor">websites and apps</h2>
      <Fade>
        <slot />
      </Fade>
    </div>

    <div class="text">
      <p :class="textColor">
        Do you need a
        <PopperPopup
          :highlight="highlight"
          referenceElement="technical"
          popperContent="Tech we ❤️ are Typescript, Vue/Vuex, Gridsome, GraphQL, Apollo, Hasura, PostgreSQL, Sanity++. Products we 😍 are Netlify, Fullstory, Sentry, Figma, Notion, Tandem, Slack++."
        />&nbsp;partner that can make a cool website or a lame app?
      </p>
    </div>
    <div class="text">
      <p :class="textColor">
        We've done
        <PopperPopup
          :highlight="highlight"
          referenceElement="fun"
          popperContent="Freia wanted a classic snake game on Snapchat. Say whaat? TL;DR the snap platform is not built to make real games (timing, fencing, collision detection..) - but we managed to pull it off before deadline because we are super awesome."
        />&nbsp;and
        <PopperPopup
          :highlight="highlight"
          referenceElement="serious"
          popperContent="We've made an end-to-end encrypted chat app, mortgage loan form, CRM, E-commerce, map service, and various CRUD apps, as well as simple company portfolios and blogs."
        />&nbsp;websites for Ruter, Urban Sharing, Gjensidige and Freia ++ from
        Oslo, San Jose, Chiang Mai and Bali - because
        <PopperPopup
          :highlight="highlight"
          referenceElement="reasons"
          popperContent="Offering remote work is the easiest way to attract great people. Offices ensures fragmentet work moments. Remote work ensures longer stretches of uninterrupted work. In addition, being remote reduces stress and makes us happy 🤗"
        />
      </p>
    </div>
    <div :class="textColor" class="contact">
      <ChatMessenger :chatColor="textColor" />
      <p :class="textColor">or</p>
      <a :class="textColor" href="mailto:hei@kokkos.io">hei@kokkos.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import PopperPopup from "@/components/PopperPopup.vue";
import Fade from "@/components/Fade.vue";
import ChatMessenger from "@/components/ChatMessenger.vue";
@Component({
  components: {
    PopperPopup,
    Fade,
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
