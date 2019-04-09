<template>
  <section class="hero mt-3">
    <!-- smart websites, made easy -->
    <div class="hero__cta">
      <h1 class="mb-1">Pretty good websites</h1>
      <p
        class="mb-2"
      >So called Javascript web apps. It's like a complete application you can visit as a website</p>
      <div class="hero__buttons mb-1">
        <Btn color="secondary" buttonText="Get a Quote"/>
        <Btn color="none" buttonText="Apply now"/>
      </div>
      <p class="join-our-team mb-2">
        Want to work remotely?
        <span>Join our team</span>
      </p>
    </div>

    <!-- hero illustration -->
    <img
      class="hero__illustration"
      :src="hero"
      alt="illustration of a web developer lying on the beach, drinking from a coconut and developing a website"
    >
    <!-- random leafs -->
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
  }

  &__cta {
    width: 100%;
    max-width: 400px;

    .join-our-team {
      span {
        font-weight: 600;
        border-bottom: 2px solid $primary;
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  &__illustration {
    width: 100%;
    max-width: 770px;
  }
}
</style>

<script>
import hero from "@/assets/hero.svg";
import Btn from "@/components/Btn";

export default {
  components: { Btn },
  computed: {
    hero() {
      return hero;
    }
  }
};
</script>
