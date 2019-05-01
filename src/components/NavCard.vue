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
  max-width: 330px;
  width: 100%;
  height: 260px;
  border: 1px solid #656d82;
  border-radius: 4px;
  margin: 15px;
  cursor: pointer;
  box-sizing: border-box;

  &__content {
    height: calc(260px - 10px);
  }

  &:hover {
    border: 5px solid $color-primary;
  }

  &__header {
    font-size: $font-size-navcard;
    font-weight: 500;
  }

  .illustration {
    max-width: 100px;
    width: 100%;
  }

  &__text {
    font-size: $font-size-b;
    width: 230px;
    font-weight: 300;
    text-align: center;
  }
}
</style>
