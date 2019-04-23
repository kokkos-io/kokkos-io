<template>
  <nav>
    <!-- logo -->
    <div class="logo__wrapper ml-5">
      <LogoKokkos class="logo__wrapper--kokkos" size="sm"/>
      <h2>kokkos</h2>
    </div>

    <!-- liste med linker -->
    <div class="links">
      <LinkNavBar linkStyle="no-underline" text="Our work" class="our-work ml-2"/>
      <LinkNavBar linkStyle="no-underline" text="Contact" class="contact"/>
      <LinkNavBar linkStyle="underline" text="Get a Quote" class="get-a-quote mr-2"/>
    </div>
    <HamburgerNavbar class="hamburger-navbar"/>
  </nav>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
import LinkNavBar from "@/components/LinkNavBar";
import HamburgerNavbar from "@/components/HamburgerNavbar";

export default {
  components: { LogoKokkos, LinkNavBar, HamburgerNavbar }
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $size-nav-bar;
  margin: 1rem;
  margin-bottom: 10rem;

  @media (max-width: $mobile) {
    margin-bottom: 4rem;
  }

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
