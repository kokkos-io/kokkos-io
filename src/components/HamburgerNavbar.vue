<template>
  <div class="dropdown mr-2">
    <div class="dropdown__hamburger-nav">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
    </div>
    <div class="dropdown__content">
      <a href="#">Our work</a>
      <a href="#">Contact</a>
      <a href="#">Get a quote</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dropdown {
  width: 55px;
  transform: translate(-50% -50%);
  cursor: pointer;

  &:hover &__content {
    display: block;
  }

  &:hover .first {
    transform: translateY(10px) rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover .second {
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover .third {
    transform: translateY(-10px) rotate(-45deg);
    transition: all 0.5s ease;
  }

  &__hamburger-nav {
    width: 30px;
    height: 30px;
    position: relative;

    div {
      height: 4px;
      width: 30px;
      background-color: $color-primary;
      position: absolute;
      transition: all 0.5s ease;
    }

    .first {
      top: 0px;
      left: 20px;
    }

    .second {
      top: 10px;
      left: 20px;
    }

    .third {
      top: 20px;
      left: 20px;
    }
  }

  &__content {
    display: none;
    position: absolute;
    min-width: 260px;
    z-index: 1;

    a {
      color: $color-primary;
      text-decoration: none;
      display: block;
      margin: 5px;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
