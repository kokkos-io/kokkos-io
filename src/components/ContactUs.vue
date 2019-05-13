<template>
  <div class="about">
    <Header title="About" description="About us" text="Who we are and what we do"/>
    <img :src="hero">

    <Leaf/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Leaf from "@/components/Leaf";
import Footer from "@/components/Footer";

import hero from "@/assets/hero.svg";

export default {
  components: { Header, Leaf, Footer },
  computed: {
    hero() {
      return hero;
    }
  }
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: $size-nav-bar;
}
</style>
