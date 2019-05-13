<template>
<<<<<<< Updated upstream
  <section class="contact-us">
    <p>Hello</p>
    <Leaf/>
  </section>
=======
  <div class="about">
    <Header title="About" description="About us" text="Who we are and what we do"/>
    <img :src="hero">

    <Leaf/>
    <Footer/>
  </div>
>>>>>>> Stashed changes
</template>

<script>
import Header from "@/components/Header";
import Leaf from "@/components/Leaf";
<<<<<<< Updated upstream
export default {
  components: { Leaf }
=======
import Footer from "@/components/Footer";

import hero from "@/assets/hero.svg";

export default {
  components: { Header, Leaf, Footer },
  computed: {
    hero() {
      return hero;
    }
  }
>>>>>>> Stashed changes
};
</script>

<style lang="scss">
<<<<<<< Updated upstream
=======
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: $size-nav-bar;
}
>>>>>>> Stashed changes
</style>
