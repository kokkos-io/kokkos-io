<template>
  <section class="quote-wrapper">
    <div class="quote">
      <div class="quote__cta mb-4">
        <h1>Quote</h1>
        <h4>Within 24 hours</h4>
        <p>Simply choose the service you need from the list below.</p>
      </div>
      <div class="wrapper">
        <!-- <div
        class="typeform-widget"
        data-url="https://martine669524.typeform.com/to/IMlE6l"
        data-transparency="100"
        style="width: 100%; height: 500px;"
        ></div>-->

        <Icons
          class="web-development"
          to="/"
          :image="iconsWebDevelopment"
          title="Web development"
          text="Web ready websites"
        />

        <Icons
          class="CMS"
          to="/"
          :image="iconsCMS"
          title="CMS"
          text="A custom-made content management system"
        />

        <Icons
          class="integrations"
          to="/"
          :image="iconsIntegrations"
          title="Integrations"
          text="email / photos / chat ..."
        />

        <Icons
          class="web-design"
          to="/"
          :image="iconsWebDesign"
          title="Web design"
          text="Beautiful responsive websites"
        />

        <Icons
          class="everything"
          to="/"
          :image="iconsEverything"
          title="Everything"
          text="Design, Code, Hosting, Integrations, cms"
        />

        <Icons
          class="dont-know"
          to="/"
          :image="iconsIDontKnow"
          title="I´m not sure"
          text="We´ll help guide you"
        />
      </div>
      <Leaf/>
    </div>
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
.quote-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3rem;
  max-width: $size-nav-bar;
  width: 100%;

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: left;

    h1 {
      font-size: 200px;
    }

    h4 {
      font-size: 40px;
    }
  }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: $desktop;
  width: 100%;

  @media (max-width: $mobile) {
    justify-content: center;
  }

  .web-development {
    border-right: 1px solid #656d82;
    border-bottom: 1px solid #656d82;

    &:hover {
      border: 5px solid $color-primary;
    }

    @media (max-width: 1122px) {
      border: 1px solid white;
    }
  }

  .CMS {
    border-bottom: 1px solid #656d82;

    &:hover {
      border: 5px solid $color-primary;
    }

    @media (max-width: 1122px) {
      border: 1px solid white;
    }
  }

  .integrations {
    border-right: 1px solid #656d82;
    border-bottom: 1px solid #656d82;

    &:hover {
      border: 5px solid $color-primary;
    }

    @media (max-width: 1122px) {
      border: 1px solid white;
    }
  }

  .web-design {
    border-bottom: 1px solid #656d82;

    &:hover {
      border: 5px solid $color-primary;
    }

    @media (max-width: 1122px) {
      border: 1px solid white;
    }
  }

  .everything {
    border-right: 1px solid #656d82;

    &:hover {
      border: 5px solid $color-primary;
    }

    @media (max-width: 1122px) {
      border: 1px solid white;
    }
  }

  .dont-know {
    &:hover {
      border: 5px solid $color-primary;
    }
  }
}

.leaf {
  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
