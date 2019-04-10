<template>
  <div class="random-leafs">
    <img class="random-leafs__fixed--acacia1" :src="fixedLeafAcacia">
    <img class="random-leafs__fixed--acacia2" :src="fixedLeafAcacia">
    <img class="random-leafs__fixed--rowan" :src="fixedLeafRowan">
  </div>
</template>

<script>
import fixedLeafAcacia from "@/assets/fixedLeafAcacia.svg";
import fixedLeafRowan from "@/assets/fixedLeafRowan.svg";

export default {
  computed: {
    fixedLeafAcacia() {
      return fixedLeafAcacia;
    },
    fixedLeafRowan() {
      return fixedLeafRowan;
    }
  }
};
</script>

<style lang="scss">
.random-leafs {
  position: fixed;
  z-index: -1;

  &__fixed--acacia1 {
    transform: scaleX(-1) rotate(70deg);
    position: fixed;
    top: 125px;
    left: -45px;
    width: 210px;
  }

  &__fixed--acacia2 {
    width: 210px;
    position: fixed;
    top: -100px;
    left: 690px;
  }

  &__fixed--rowan {
    width: 180px;
    position: fixed;
    top: -106px;
    left: 1215px;
  }
}
</style>
