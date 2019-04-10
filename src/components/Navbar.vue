<template>
  <nav class="ma-2 mb-9 ml-8">
    <!-- logo -->
    <div class="logo__wrapper">
      <LogoKokkos size="md" class="mr-1"/>
      <h2>kokkos</h2>
    </div>

    <!-- liste med linker -->
    <ul class="links">
      <li class="mr-1">
        <Btn color="none-border" buttonText="Our work"/>
      </li>
      <li class="mr-1">
        <Btn color="none-border" buttonText="Contact"/>
      </li>
      <li class="mr-1">
        <Btn color="secondary" buttonText="Get a Quote"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
import Btn from "@/components/Btn";

export default {
  components: { LogoKokkos, Btn }
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: $size-nav-bar;

  .links {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
}

.logo {
  &__wrapper {
    display: flex;
    align-items: center;
    font-family: $font-stack;
    color: $primary;
  }
}
</style>
