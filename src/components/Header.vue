<template>
  <div class="header">
    <h1 class="header__title">{{title}}</h1>
    <h4 class="header__description">{{description}}</h4>
    <p class="header__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "text"]
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 100px;

  &__title {
    font-size: 300px;
    line-height: 270px;

    @media (max-width: $mobile) {
      font-size: 150px;
      line-height: 135px;
    }

    @media (max-width: $mobile-xs) {
      font-size: 100px;
      line-height: 100px;
    }
  }

  &__description {
    font-size: 60px;

    @media (max-width: $mobile) {
      font-size: 30px;
    }

    @media (max-width: $mobile-xs) {
      font-size: 23px;
    }
  }

  &__text {
    font-size: 25px;
    max-width: 480px;
    width: 100%;

    @media (max-width: $mobile) {
      font-size: 18px;
      max-width: 200px;
    }
  }
}
</style>
