<template>
  <section class="quote">
    <div class="quote__cta mb-4">
      <h1>Get a quote</h1>
      <p>Simply choose the service you need from the list below.</p>
    </div>
    <div class="wrapper">
      <Icons
        @click.native="showModalDev = true"
        :image="iconsWebDevelopment"
        title="Web development"
        text="Web ready websites"
      />

      <v-dialog class="show-modal" v-model="showModalDev" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsWebDevelopment">
          </div>
          <div class="show-modal__window--right">
            <h2>Web Development</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
      </v-dialog>

      <Icons
        @click.native="showModalCMS = true"
        :image="iconsCMS"
        title="CMS"
        class="icon-CMS"
        text="A custom-made content management system"
      />

      <v-dialog class="show-modal" v-model="showModalCMS" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsCMS">
          </div>
          <div class="show-modal__window--right">
            <h2>CMS</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
      </v-dialog>

      <Icons
        @click.native="showModalInteg = true"
        :image="iconsIntegrations"
        title="Integrations"
        text="email / photos / chat ..."
      />

      <v-dialog class="show-modal" v-model="showModalInteg" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsIntegrations">
          </div>
          <div class="show-modal__window--right">
            <h2>Integrations</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
      </v-dialog>

      <Icons
        @click.native="showModalDesign = true"
        :image="iconsWebDesign"
        title="Web design"
        text="Beautiful responsive websites"
      />

      <v-dialog class="show-modal" v-model="showModalDesign" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsWebDesign">
          </div>
          <div class="show-modal__window--right">
            <h2>Web design</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
      </v-dialog>

      <Icons
        @click.native="showModalEver = true"
        :image="iconsEverything"
        title="Everything"
        class="icon-everything"
        text="Design, Code, Hosting, Integrations, cms"
      />

      <v-dialog class="show-modal" v-model="showModalEver" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsEverything">
          </div>
          <div class="show-modal__window--right">
            <h2>Everything</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
      </v-dialog>

      <Icons
        @click.native="showModalDontKnow = true"
        :image="iconsIDontKnow"
        title="I´m not sure"
        text="We´ll help guide you"
      />

      <v-dialog class="show-modal" v-model="showModalDontKnow" max-width="800">
        <div class="show-modal__window">
          <div class="show-modal__window--left">
            <img :src="iconsIDontKnow">
          </div>
          <div class="show-modal__window--right">
            <h2>I´m not sure</h2>
            <p>Bleblelbelblablalblalblallblabsdlsfbdflblfsglsd</p>
            <p>Bgsdgblssfgdfzbfdshdsghldfzgdrglbfzdb</p>
          </div>
        </div>
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
      showModalDev: false,
      showModalCMS: false,
      showModalInteg: false,
      showModalDesign: false,
      showModalEver: false,
      showModalDontKnow: false
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

  .show-modal {
    &__window {
      display: flex;
      max-height: 800px;
      background-color: white;
      font-family: $font-stack;
    }
  }

  .icon-CMS,
  .icon-everything {
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
