<template>
  <section class="quote">
    <div class="quote__cta mb-4">
      <h1>Get a quote</h1>
      <p>Simply choose the service you need from the list below.</p>
    </div>
    <div class="wrapper">
      <Icons :image="iconsWebDevelopment" title="Web development" text="Web ready websites"/>
      <Icons
        :image="iconsCMS"
        title="CMS"
        class="iconCMS"
        text="A custom-made content management system"
      />
      <Icons :image="iconsIntegrations" title="Integrations" text="email / photos / chat ..."/>
      <Icons :image="iconsWebDesign" title="Web design" text="Beautiful responsive websites"/>
      <Icons
        :image="iconsEverything"
        title="Everything"
        class="iconEverything"
        text="Design, Code, Hosting, Integrations, cms"
      />
      <Icons
        @click.native="dialog = true"
        :image="iconsIDontKnow"
        title="I´m not sure"
        text="We´ll help guide you"
      />

      <v-dialog v-model="dialog" max-width="290">
        <v-card-title class="headline">Hello</v-card-title>
      </v-dialog>
    </div>
    <Leaf/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
import iconsWebDevelopment from "@/assets/iconsWebDevelopment.svg";
import iconsCMS from "@/assets/iconsCMS.svg";
import iconsIntegrations from "@/assets/iconsIntegrations.svg";
import iconsWebDesign from "@/assets/iconsWebDesign.svg";
import iconsEverything from "@/assets/iconsEverything.svg";
import iconsIDontKnow from "@/assets/iconsIDontKnow.svg";

import Icons from "@/components/Icons.vue";

export default {
  components: { Leaf, Icons },

  data() {
    return {
      dialog: false
    };
  },

  computed: {
    iconsWebDevelopment() {
      return iconsWebDevelopment;
    },
    iconsCMS() {
      return iconsCMS;
    },
    iconsIntegrations() {
      return iconsIntegrations;
    },
    iconsWebDesign() {
      return iconsWebDesign;
    },
    iconsEverything() {
      return iconsEverything;
    },
    iconsIDontKnow() {
      return iconsIDontKnow;
    }
  }
};
</script>

<style lang="scss">
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 3rem;

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: $desktop;
  width: 100%;

  @media (max-width: $mobile) {
    justify-content: center;
  }

  .iconCMS,
  .iconEverything {
    img {
      margin-top: 1rem;
    }
  }
}

.leaf {
  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
