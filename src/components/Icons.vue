<template>
  <div class="icons">
    <img class="icons__img icon-pic-size" :src="image">
    <p class="icons icons__title bold">{{title}}</p>
  </div>
</template>

<style lang="scss">
.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 25px 25px 5px 25px;
  max-width: 190px;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  props: ["image", "title"]
};
</script>
