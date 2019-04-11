<template>
  <div class="leaf">
    <img class="leaf__acacia1" :src="leafAcacia">
    <img class="leaf__acacia2" :src="leafAcacia">
    <img class="leaf__rowan" :src="leafRowan">
  </div>
</template>

<script>
import leafAcacia from "@/assets/leaf-acacia.svg";
import leafRowan from "@/assets/leaf-rowan.svg";

export default {
  computed: {
    leafAcacia() {
      return leafAcacia;
    },
    leafRowan() {
      return leafRowan;
    }
  }
};
</script>

<style lang="scss">
.leaf {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  &__acacia1 {
    transform: scaleX(-1) rotate(70deg);
    position: fixed;
    top: 125px;
    left: -45px;
    width: 210px;
  }

  &__acacia2 {
    width: 210px;
    position: fixed;
    top: -100px;
    right: 35%;
  }

  &__rowan {
    width: 180px;
    position: fixed;
    top: -106px;
    right: 5px;
  }
}
</style>
