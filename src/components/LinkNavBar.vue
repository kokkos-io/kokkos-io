<template>
  <router-link :to="to" :class="linkNavBarTextClasses">{{text}}</router-link>
</template>

<script>
export default {
  props: ["text", "linkStyle", "to"],

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
  list-style: none;
  text-decoration: none;
  max-width: 140px;
  width: 100%;

  &__no-underline {
    margin: 0;
    color: $color-primary;
    text-decoration: none;
    transition: font-size 1s;

    &:hover {
      font-size: 19px;
    }
  }

  &__underline {
    margin: 0;
    color: $color-primary;
    text-decoration: underline;
    transition: font-size 1s;

    &:hover {
      font-size: 19px;
    }
  }
}
</style>
