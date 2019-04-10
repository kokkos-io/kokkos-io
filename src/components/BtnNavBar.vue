<template>
  <button class="btn-nav-bar">
    <p :class="buttonNavBarTextClasses">{{buttonText}}</p>
  </button>
</template>

<script>
export default {
  props: ["text", "buttonText"],

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
    color: $primary;
    padding: 10px 35px 10px 35px;
  }

  &__underline {
    margin: 0;
    font-size: 16px;
    color: $primary;
    padding: 10px 35px 10px 35px;
    border-bottom: 2px solid $primary;
  }
}
</style>
