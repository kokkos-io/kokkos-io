<template>
  <img :class="imgClass" :src="image">
</template>

<style lang="scss">
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