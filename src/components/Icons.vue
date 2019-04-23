<template>
  <div class="icons">
    <img class="icons__img icon-pic-size" :src="image">
    <h4 class="icons__title">{{title}}</h4>
    <p class="icons__text">{{text}}</p>
  </div>
</template>

<style lang="scss">
.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;
  transition: border 1s;

  p {
    color: white;
    transition: color 1s;
  }

  &:hover {
    border: 1px solid #fad078;

    p {
      color: $color-primary;
    }
  }

  margin: 35px;
  width: 300px;
  height: 300px;

  p {
    text-align: center;
  }
}
</style>

<script>
export default {
  props: ["image", "title", "text"]
};
</script>
