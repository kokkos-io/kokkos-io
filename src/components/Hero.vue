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

    <!-- random leafs -->
    <Leaf/>
    <Footer/>
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  @media (max-width: $mobile) {
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    margin: 1rem;
  }

  .intro-text {
    max-width: $size-nav-bar;
    width: 100%;
    font-weight: 300;
    font-size: 36px;
    margin-bottom: 100px;

    @media (max-width: $mobile) {
      font-size: 30px;
    }
  }

  .nav-card-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: $size-nav-bar;
    width: 100%;

    @media (max-width: 1230px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .leaf {
    @media (max-width: $mobile) {
      display: none;
    }
  }
}
</style>

<script>
import NavCard from "@/components/NavCard";
import Leaf from "@/components/Leaf";
import Btn from "@/components/Btn";
import Footer from "@/components/Footer";

import heroNavigationWork from "@/assets/heroNavigationWork.svg";
import heroNavigationAbout from "@/assets/heroNavigationAbout.svg";
import heroNavigationChat from "@/assets/heroNavigationChat.svg";

export default {
  components: { Btn, Leaf, Footer, NavCard },
  computed: {
    heroNavigationWork() {
      return heroNavigationWork;
    },
    heroNavigationAbout() {
      return heroNavigationAbout;
    },
    heroNavigationChat() {
      return heroNavigationChat;
    }
  }
};
</script>
