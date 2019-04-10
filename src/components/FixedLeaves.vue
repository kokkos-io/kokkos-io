<template>
  <div class="random-leafs">
    <img class="random-leafs__fixed--acacia1" :src="fixedLeafAcacia">
    <img class="random-leafs__fixed--acacia2" :src="fixedLeafAcacia">
  </div>
</template>

<script>
import fixedLeafAcacia from "@/assets/fixedLeafAcacia.svg";
import fixedLeaf2 from "@/assets/fixedLeaf2.svg";

export default {
  computed: {
    fixedLeafAcacia() {
      return fixedLeafAcacia;
    },
    fixedLeaf2() {
      return fixedLeaf2;
    }
  }
};
</script>

<style lang="scss">
.random-leafs {
  position: fixed;

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
}
</style>
