<template>
  <button :class="buttonTextClasses">
    <p class="btn__text semi-bold">{{buttonText}}</p>
  </button>
</template>

<script>
export default {
  props: ["color", "buttonText"],

  computed: {
    buttonTextClasses() {
      if (this.color) {
        return `btn btn__${this.color}`;
      }

      return "btn";
    }
  }
};
</script>

<style lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  background: $secondary;
  border: 0;
  margin: 10px;
  border: 3px solid $secondary;

  &__secondary {
    background: $secondary;
  }

  &__none {
    background: none;
  }

  &__none-border {
    background: none;
    border: none;
  }

  &__text {
    margin: 0;
    font-size: 16px;
    color: #262936;
    padding: 13px 30px 13px 30px;
  }
}
</style>
