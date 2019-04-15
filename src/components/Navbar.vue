<template>
  <nav class="ma-2 mb-10">
    <!-- logo -->
    <div class="logo__wrapper ml-5">
      <LogoKokkos class="logo__wrapper--kokkos" size="sm"/>
      <h2>kokkos</h2>
    </div>

    <!-- liste med linker -->
    <div class="links">
      <BtnNavBar text="Our work" class="our-work ml-2"/>
      <BtnNavBar text="Contact" class="contact"/>
      <BtnNavBar text="Get a Quote" class="get-a-quote mr-2"/>
    </div>
    <HamburgerNavbar class="hamburger-navbar"/>
  </nav>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
import BtnNavBar from "@/components/BtnNavBar";
import HamburgerNavbar from "@/components/HamburgerNavbar";

export default {
  components: { LogoKokkos, BtnNavBar, HamburgerNavbar }
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $size-nav-bar;

  .logo__wrapper {
    @media (max-width: $mobile) {
      margin-left: 0;
    }

    h2 {
      @media (max-width: $mobile) {
        display: none;
      }
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;

    @media (max-width: $mobile) {
      display: none;
    }
  }
}

.hamburger-navbar {
  display: none;

  @media (max-width: $mobile) {
    display: block;
  }
}
</style>
