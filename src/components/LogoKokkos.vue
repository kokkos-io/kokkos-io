<template>
  <img :class="imgClass" :src="image">
</template>

<style lang="scss">
.logo-horizontal {
  &__img {
    width: 90px;

    &--sm {
      width: 40px;
    }

    &--md {
      width: 60px;
    }

    &--lg {
      width: 90px;
    }

    &--xl {
      width: 150px;
    }
  }
}
</style>

<script>
import image from "@/assets/logoPure.svg";

export default {
  props: ["size"],
  computed: {
    image() {
      return image;
    },

    imgClass() {
      let imgClass = "logo-horizontal__img";

      if (this.size) {
        imgClass += `--${this.size}`;
      }

      return imgClass;
    }
  }
};
</script>