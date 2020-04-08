<template>
  <div
    ref="loading"
    :background="background"
    :speed="speed"
    :loop="loop"
    :controls="controls"
    :autoplay="autoplay"
  />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import lottie from "lottie-web";
import animationData from "../data/lottieLoading.json";

@Component({
  props: {
    src: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: "white"
    },
    speed: {
      type: String,
      default: "1"
    },
    loop: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  }
})
export default class Lottie extends Vue {
  anim: any = null;

  mounted() {
    this.loadLottie();
  }

  async loadLottie() {
    if (!this.$props.src) return;

    this.anim = lottie.loadAnimation({
      container: this.$refs.loading as HTMLElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData
      // rendererSettings: {}
    });
  }
}
</script>
<style lang="scss"></style>
