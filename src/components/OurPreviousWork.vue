<template>
  <section class="work">
    <div class="work__heading ma-2">
      <h1>Work</h1>
      <p>What we have previously done or are currently working on.</p>
    </div>
    <div class="wrapper">
      <LinkPrevWork
        :image="freiaLogo"
        title="Freia"
        text="blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal"
      />
      <LinkPrevWork
        title="Ruter"
        text="blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal"
      />
      <LinkPrevWork
        title="Netlife"
        text="blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal"
      />
      <LinkPrevWork
        :image="gjensidigeLogo"
        title="Gjensidige"
        text="blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal
          blablablalbalblalblablablalbalblalblablablalbalblalblablablalbalblal"
      />
    </div>
    <Leaf/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
import LinkPrevWork from "@/components/LinkPrevWork";
import gjensidigeLogo from "@/assets/gjensidige_logo.svg";
import freiaLogo from "@/assets/freia_logo.svg";
export default {
  components: { Leaf, LinkPrevWork },
  computed: {
    gjensidigeLogo() {
      return gjensidigeLogo;
    },
    freiaLogo() {
      return freiaLogo;
    }
  }
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

  .wrapper {
    display: flex;
    justify-content: space-around;
    max-width: $size-nav-bar;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
}
</style>
