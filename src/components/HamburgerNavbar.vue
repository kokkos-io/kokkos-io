<template>
  <div class="dropdown mr-1">
    <div class="dropdown__hamburger-nav">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
    </div>
    <div class="dropdown__content">
      <div class="dropdown__content--links ma-1">
        <a href="#">Our work</a>
        <a href="#">Get a quote</a>
      </div>
      <LogoKokkos class="logo-kokkos" size="xl"/>
      <div class="contact">
        <div class="contact__tobias ma-1">
          <p>Tobias Goulden Schultz</p>
          <p>+47 94484500</p>
          <a href="#">tobias@kokkos.io</a>
        </div>
        <div class="contact__martine ma-1">
          <p>Martine Petlund Breiby</p>
          <p>+47 97022149</p>
          <a href="#">martine@kokkos.io</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoKokkos from "@/components/LogoKokkos";
export default {
  components: { LogoKokkos }
};
</script>

<style lang="scss">
.dropdown {
  width: 55px;
  transform: translate(-50% -50%);
  cursor: pointer;

  &:hover &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover .first {
    transform: translateY(10px) rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover .second {
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover .third {
    transform: translateY(-10px) rotate(-45deg);
    transition: all 0.5s ease;
  }

  &__hamburger-nav {
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 2;

    div {
      height: 4px;
      width: 30px;
      background-color: $color-primary;
      position: absolute;
      transition: all 0.5s ease;
    }

    .first {
      top: 0px;
      left: 20px;
    }

    .second {
      top: 10px;
      left: 20px;
    }

    .third {
      top: 20px;
      left: 20px;
    }
  }

  &__content {
    display: none;
    position: absolute;
    min-width: 260px;
    width: 100%;
    height: 100%;
    z-index: 1;
    border: 1px solid black;
    left: 0;
    top: 0;
    background: white;

    &--links {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a {
      color: $color-primary;
      text-decoration: none;
      margin: 10px;
      justify-content: center;
      font-size: $font-size-c;
    }

    a:hover {
      text-decoration: underline;
    }

    .logo-kokkos {
      margin: 20px;
    }

    .contact {
      &__tobias {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p,
        a {
          font-size: $font-size-b;
          margin: 0;
        }
      }

      &__martine {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p,
        a {
          font-size: $font-size-b;
          margin: 0;
        }
      }
    }
  }
}
</style>
