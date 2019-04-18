<template>
  <a href="#" :class="linkNavBarTextClasses">{{text}}</a>
</template>

<script>
export default {
  props: ["text", "linkStyle"],

  computed: {
    linkNavBarTextClasses() {
      if (this.linkStyle) {
        return `link-nav-bar semi-bold link-nav-bar__${this.linkStyle}`;
      }

      return "link-nav-bar semi-bold";
    }
  }
};
</script>

<style lang="scss">
.link-nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0;
  list-style: none;
  text-decoration: none;
  width: 150px;

  &__no-underline {
    margin: 0;
    color: $color-primary;
    text-decoration: none;

    &:hover {
      font-size: 20px;
    }
  }

  &__underline {
    margin: 0;
    color: $color-primary;
    text-decoration: underline;

    &:hover {
      font-size: 20px;
    }
  }
}
</style>
