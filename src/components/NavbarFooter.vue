<template>
  <div class="navbar-footer">
    <div class="navbar-footer__header">
      <div class="navbar-footer__header--box"></div>
      <h2>What can we help you with?</h2>
    </div>

    <div class="navbar-footer__wrapper">
      <NavCard
        class="navbar-footer__work"
        header="Our work"
        to="our-work"
        :image="heroNavigationWork"
        text="See previous projects"
      />

      <NavCard
        class="navbar-footer__about"
        header="About"
        to="/"
        :image="heroNavigationAbout"
        text="Who we are and what we do"
      />
      <NavCard
        class="navbar-footer__chat"
        header="Chat with us"
        to="/"
        :image="heroNavigationChat"
        text="We are online"
      />
    </div>
  </div>
</template>

<script>
import NavCard from "@/components/NavCard";

import heroNavigationWork from "@/assets/heroNavigationWork.svg";
import heroNavigationAbout from "@/assets/heroNavigationAbout.svg";
import heroNavigationChat from "@/assets/heroNavigationChat.svg";

export default {
  components: { NavCard },
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

<style lang="scss">
.navbar-footer {
  &__header {
    &--box {
      height: 1px;
      width: 320px;
      border: 1px solid $color-primary;
      border-radius: 10px;
      margin-bottom: 100px;
    }

    h2 {
      margin-bottom: 50px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    max-width: $size-nav-bar;
    margin-bottom: 200px;

    @media (max-width: 1230px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
