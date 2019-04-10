<template>
  <nav class="ma-2 mb-9 ml-5">
    <!-- logo -->
    <div class="logo__wrapper">
      <LogoKokkos class="logo__wrapper--kokkos" size="sm"/>
      <h2>kokkos</h2>
    </div>

    <!-- liste med linker -->
    <div class="links">
      <BtnNavBar text="no-underline" buttonText="Our work"/>

      <BtnNavBar text="no-underline" buttonText="Contact"/>

      <BtnNavBar text="underline" buttonText="Get a Quote"/>
    </div>
  </nav>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
import BtnNavBar from "@/components/BtnNavBar";

export default {
  components: { LogoKokkos, BtnNavBar }
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $size-nav-bar;

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;

    @media (max-width: 760px) {
    }
  }
}
</style>
