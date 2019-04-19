<template>
  <section class="work">
    <div class="work__heading">
      <h1>Work</h1>
      <p>What we have previously done or are currently working on.</p>
    </div>

    <div class="work__places">
      <div class="work__places--freia">
        <div class="box"></div>
        <h2>Freia</h2>
        <p>
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
        </p>
      </div>

      <div class="work__places--ruter">
        <div class="box"></div>
        <h2>Ruter</h2>
        <p>blablablalbla</p>
      </div>
    </div>
    <Leaf/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
export default {
  components: { Leaf }
};
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__places {
    display: flex;
    justify-content: space-around;
    max-width: $size-nav-bar;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;

    &--freia {
      width: 100%;
      max-width: 550px;
      height: 100%;
      max-height: 550px;
      border: 1px solid black;
    }

    &--ruter {
      width: 100%;
      max-width: 550px;
      height: 100%;
      max-height: 550px;
      border: 1px solid black;
    }
  }

  .box {
    max-height: 300px;
    height: 100%;
    max-width: 500px;
    width: 100%;
    background-color: green;
  }
}
</style>
