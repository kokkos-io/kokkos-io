<template>
  <section class="hero">
    <!-- smart websites, made easy -->
    <div class="hero__cta">
      <h1 class="mb-1">Pretty good websites</h1>
      <p
        class="hero__description mb-1"
      >So called Javascript web apps. It's like a complete application you can visit as a website.</p>
      <div class="hero__buttons mb-1">
        <Btn color="secondary" buttonText="Get a Quote"/>
      </div>
      <p class="join-our-team">
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
