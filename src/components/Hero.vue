<template>
  <section class="hero">
    <h1 class="intro-text">
      have made
      <b>websites</b> and
      <b>apps</b> for gjensidige, freia, ruter, netlife design, improving lives, lyse ideer, good morning, skolesjakken, direktoratet for økonomistyring, direktoratet for byggkvalitet, integrerings- og mangfoldsdirektoratet
      <b>and you?</b>
    </h1>
    <div class="nav-card-wrapper">
      <NavCard
        class="nav-card-wrapper__work"
        header="Our work"
        to="/our-work"
        :image="heroNavigationWork"
        text="See previous projects"
      />
      <NavCard
        class="nav-card-wrapper__about"
        header="About"
        to="/contact"
        :image="heroNavigationAbout"
        text="Who we are and what we do"
      />
      <NavCard
        class="nav-card-wrapper__chat"
        header="Chat with us"
        to="/"
        :image="heroNavigationChat"
        text="We are online"
      />
    </div>

    <!-- hero illustration -->
    <img
      class="hero__illustration"
      :src="hero"
      alt="illustration of a web developer lying on the beach, drinking from a coconut and developing a website"
    >
    <!-- random leafs -->
    <Leaf/>
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem;

  @media (max-width: $mobile) {
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    margin: 1rem;
  }

  &__cta {
    width: 100%;
    max-width: 400px;

    @media (max-width: $mobile) {
      margin-bottom: 5rem;
    }

    h1 {
      line-height: 1.2;
    }

    .join-our-team {
      span {
        font-weight: 600;
        border-bottom: 2px solid $color-primary;
        cursor: pointer;
      }
    }
  }

  &__description {
    max-width: $size-description-tags;
  }

  &__buttons {
    display: flex;
    justify-content: center;

    .btn {
      &__secondary {
        width: 100%;
      }
    }
  }

  &__illustration {
    width: 100%;
    max-width: 670px;
  }

  .leaf {
    @media (max-width: $mobile) {
      display: none;
    }
  }
}
</style>

<script>
import hero from "@/assets/hero.svg";
import Leaf from "@/components/Leaf";
import Btn from "@/components/Btn";

export default {
  components: { Btn, Leaf },
  computed: {
    hero() {
      return hero;
    }
  }
};
</script>
