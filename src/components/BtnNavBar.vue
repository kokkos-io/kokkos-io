<template>
  <button class="btn-nav-bar">
    <p :class="buttonNavBarTextClasses">{{text}}</p>
  </button>
</template>

<script>
export default {
  props: ["text"],

  computed: {
    buttonNavBarTextClasses() {
      if (this.text) {
        return `btn-nav-bar semi-bold btn-nav-bar__${this.text}`;
      }

      return "btn-nav-bar semi-bold";
    }
  }
};
</script>

<style lang="scss">
.btn-nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0;

  &__no-underline {
    margin: 0;
    font-size: 16px;
    color: $color-primary;
  }

  &__underline {
    margin: 0;
    color: $color-primary;
    border-bottom: 2px solid $color-primary;
  }
}
</style>
