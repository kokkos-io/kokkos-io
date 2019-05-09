<template>
  <div class="icons">
    <router-link :to="to" class="icons__content">
      <h4 class="icons__title">{{title}}</h4>
      <img class="icons__img" :src="image">
      <p class="icons__text">{{text}}</p>
    </router-link>
  </div>
</template>

<style lang="scss">
.icons,
.icons__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
}

.icons {
  max-width: 512px;
  width: 100%;
  height: 270px;
  border: 1px solid white;
  cursor: pointer;
  box-sizing: border-box;

  &__content {
    height: calc(270px - 10px);
  }

  &:hover {
    border: 5px solid $color-primary;
  }

  &__header {
    font-size: $font-size-navcard;
    font-weight: 500;
  }

  .img {
    max-width: 80px;
    width: 100%;
  }

  &__text {
    font-size: $font-size-b;
    width: 230px;
    font-weight: 200;
    text-align: center;
  }
}
</style>

<script>
export default {
  props: ["image", "title", "text", "to"]
};
</script>
