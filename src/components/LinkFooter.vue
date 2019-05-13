<template>
  <div class="contact">
    <img class="illustration" :src="image">
    <p class="contact__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "text"]
};
</script>

<style lang="scss">
.contact {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__text {
    margin-left: 10px;
  }
}

.illustration {
  width: 40px;
  margin: 5px;
}
</style>
