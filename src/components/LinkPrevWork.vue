<template>
  <div class="places">
    <img class="box" :src="image">
    <h2 class="places__title">{{title}}</h2>
    <p class="places__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "text"]
};
</script>

<style lang="scss">
.box {
  width: 550px;
  height: 350px;
}

.places {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 550px;
  margin: 20px;
}
</style>
