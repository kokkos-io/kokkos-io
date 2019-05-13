<template>
  <nav class="navbar">
    <div class="nav">
      <router-link to="/" class="logo__wrapper">
        <LogoKokkos class="logo__wrapper--kokkos" size="sm"/>
        <h2>kokkos</h2>
      </router-link>

      <!-- liste med linker -->
      <div class="links">
        <LinkNavBar to="/our-work" linkStyle="no-underline" text="Our work" class="our-work ml-2"/>
        <LinkNavBar to="/contact" linkStyle="no-underline" text="Contact" class="contact"/>
        <LinkNavBar
          to="/get-a-quote"
          linkStyle="underline"
          text="Get a Quote"
          class="get-a-quote mr-2"
        />
      </div>
      <MobileNavbar class="mobile-navbar"/>
    </div>
  </nav>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
import LinkNavBar from "@/components/LinkNavBar";
import MobileNavbar from "@/components/MobileNavbar";

export default {
  components: { LogoKokkos, LinkNavBar, MobileNavbar }
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 200px;

  @media (max-width: $mobile) {
    margin-bottom: 50px;
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $size-nav-bar;
  width: 100%;
  margin: 1rem;
  margin-bottom: 5rem;

  @media (max-width: $mobile) {
    margin-bottom: 4rem;
  }

  .logo__wrapper {
    text-decoration: none;
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

.mobile-navbar {
  display: none;

  @media (max-width: $mobile) {
    display: block;
  }
}
</style>
