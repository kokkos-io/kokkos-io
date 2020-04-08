<template>
  <div
    :class="[
      $store.state.loading ? 'visible' : 'not-visible',
      'pointer-events-none',
      'page-cover'
    ]"
  >
    <Lottie
      src="https://assets9.lottiefiles.com/datafiles/cb81834f3b75c3d2aba9d8a58ad1f408/AE_JSON/loader1.json"
      background="#F3F4F5"
      speed="1"
      style="width: 300px; height: 300px;"
      loop
      controls
      autoplay
    />
  </div>
</template>

<style lang="scss">
.page-cover {
  @apply .h-screen .w-screen .bg-white .z-10 .absolute .inset-0 .flex .justify-center .items-center;
}

.visible {
  opacity: 1;
  transition: opacity 0.25s ease-out;
}

.not-visible {
  opacity: 0;
  transition: opacity 0.25s ease-out;
}
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Lottie from "./Lottie.vue";

@Component({
  components: {
    Lottie
  }
})
export default class Loading extends Vue {}
</script>
