<template>
  <section class="hero mt-3 ml-3">
    <!-- smart websites, made easy -->
    <div class="hero__cta mt-2">
      <h1>Pretty good websites</h1>
      <p
        class="hero__description mt-1"
      >So called Javascript web apps. It's like a complete application you can visit as a website.</p>
      <div class="hero__buttons mt-1">
        <Btn color="secondary" buttonText="Get a Quote"/>
      </div>
      <p class="join-our-team mt-1">
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
    <FixedLeaves/>
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

    h1 {
      line-height: 1.2;
    }

    .join-our-team {
      span {
        font-weight: 600;
        border-bottom: 2px solid $primary;
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

    @media (max-width: 760px) {
      margin-top: 5rem;
    }
  }
}
</style>

<script>
import hero from "@/assets/hero.svg";
import FixedLeaves from "@/components/FixedLeaves";
import Btn from "@/components/Btn";

export default {
  components: { Btn, FixedLeaves },
  computed: {
    hero() {
      return hero;
    }
  }
};
</script>
