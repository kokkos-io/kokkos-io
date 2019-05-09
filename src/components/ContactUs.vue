<template>
  <section class="contact-us">
    <NavCard
      class="nav-card__about"
      header="About"
      to="/"
      :image="heroNavigationAbout"
      text="Who we are and what we do"
    />
    <NavCard
      class="nav-card__quote"
      header="Get a Quote"
      to="/get-a-quote"
      :image="heroNavigationGAQ"
      text="Within 24 hours"
    />
    <NavCard
      class="nav-card__join"
      header="Join Kokkos"
      to="/"
      :image="heroNavigationJoin"
      text="Remote web development"
    />
    <NavCard
      class="nav-card__work"
      header="Our work"
      to="/our-work"
      :image="heroNavigationWork"
      text="See previous projects"
    />
    <NavCard
      class="nav-card__kaching"
      header="Ka´Ching"
      to="/"
      :image="heroNavigationKaChing"
      text="Our instant payout++ program"
    />
    <NavCard
      class="nav-card__chat"
      header="Chat with us"
      to="/"
      :image="heroNavigationChat"
      text="We are online"
    />
    <Leaf/>
    <Footer/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
import NavCard from "@/components/NavCard";
import Footer from "@/components/Footer";

import heroNavigationAbout from "@/assets/heroNavigationAbout.svg";
import heroNavigationGAQ from "@/assets/heroNavigationGAQ.svg";
import heroNavigationJoin from "@/assets/heroNavigationJoin.svg";
import heroNavigationWork from "@/assets/heroNavigationWork.svg";
import heroNavigationKaChing from "@/assets/heroNavigationKaChing.svg";
import heroNavigationChat from "@/assets/heroNavigationChat.svg";

export default {
  components: { Leaf, NavCard, Footer },
  computed: {
    heroNavigationAbout() {
      return heroNavigationAbout;
    },
    heroNavigationGAQ() {
      return heroNavigationGAQ;
    },
    heroNavigationJoin() {
      return heroNavigationJoin;
    },
    heroNavigationWork() {
      return heroNavigationWork;
    },
    heroNavigationKaChing() {
      return heroNavigationKaChing;
    },
    heroNavigationChat() {
      return heroNavigationChat;
    }
  }
};
</script>

<style lang="scss">
.contact-us {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 7rem;
}

.nav {
  margin-bottom: 2rem;
}
</style>
