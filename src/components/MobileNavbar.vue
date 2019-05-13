<template>
  <div class="dropdown">
    <div @click="menuIsOpen = !menuIsOpen" class="dropdown__mobile-nav">
      <div :class="menuIsOpen ? 'first--open' : 'first'"></div>
      <div :class="menuIsOpen ? 'second--open' : 'second'"></div>
      <div :class="menuIsOpen ? 'third--open' : 'third'"></div>
    </div>
    <div :class="menuIsOpen ? 'dropdown__content' : 'dropdown__content--hidden'">
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


<style lang="scss">
.dropdown {
  width: 45px;
  transform: translate(-50% -50%);
  cursor: pointer;

  &__mobile-nav {
    width: 40px;
    height: 40px;
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
      top: 5px;
      left: 15px;

      &--open {
        transform: translateX(20px) translateY(15px) rotate(45deg);
        transition: all 0.5s ease;
      }
    }

    .second {
      top: 15px;
      left: 15px;

      &--open {
        opacity: 0;
        transition: all 0.2s ease;
      }
    }

    .third {
      top: 25px;
      left: 15px;

      &--open {
        transform: translateX(20px) translateY(15px) rotate(-45deg);
        transition: all 0.5s ease;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    min-width: 260px;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    background: white;
    box-sizing: border-box;

    &--hidden {
      display: none;
    }

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
      display: flex;
      flex-direction: column;
      &__tobias {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;

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

<script>
import LogoKokkos from "@/components/LogoKokkos";
export default {
  components: { LogoKokkos },

  data() {
    return {
      menuIsOpen: false
    };
  }
};
</script>
