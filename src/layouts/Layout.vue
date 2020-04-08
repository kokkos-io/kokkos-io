<template>
  <div class="border-container">
    <Loading />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Loading from "@/components/Loading.vue";
@Component({
  components: {
    Loading
  }
})
export default class Layout extends Vue {}
</script>


