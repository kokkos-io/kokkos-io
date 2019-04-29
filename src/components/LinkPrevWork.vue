<template>
  <div class="projects">
    <img class="box" :src="image">
    <h2 class="projects__title">{{title}}</h2>
    <p class="projects__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "text"]
};
</script>

<style lang="scss">
.box {
  max-width: 550px;
  width: 100%;
  max-height: 350px;
  height: 100%;
}

.projects {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 550px;
  margin: 20px;
  margin-bottom: 100px;
}
</style>
