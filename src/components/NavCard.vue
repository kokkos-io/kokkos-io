<template>
  <div class="nav-card">
    <router-link :to="to" class="nav-card__content">
      <h3 class="nav-card__header">{{header}}</h3>
      <img class="illustration" :src="image">
      <p class="nav-card__text">{{text}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["header", "image", "text", "to"]
};
</script>

<style lang="scss">
$nav-card-height: 260px;

.nav-card,
.nav-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
}
.nav-card {
  max-width: 380px;
  width: 100%;
  height: 350px;
  border: 1px solid #656d82;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;

  @media (max-width: 1230px) {
    max-width: 700px;
    width: 100%;
    margin: 20px;
  }

  &__content {
    height: calc(380px - 10px);
  }

  &:hover {
    border: 3px solid $color-primary;
  }

  &__header {
    font-size: 36px;
    font-weight: 500;
  }

  .illustration {
    max-width: 126px;
    width: 100%;
  }

  &__text {
    font-size: 25px;
    max-width: 410px;
    width: 100%;
    font-weight: 300;
    text-align: center;
  }
}
</style>
