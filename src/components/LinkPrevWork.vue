<template>
<<<<<<< Updated upstream
  <div class="places">
    <img class="box" :src="image">
    <h2 class="places__title">{{title}}</h2>
    <p class="places__text">{{text}}</p>
=======
  <div class="projects">
    <div class="image-box">
      <img class="box" :src="image">
    </div>
    <h2 class="projects__title">{{title}}</h2>
    <p class="projects__text">{{text}}</p>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  props: ["image", "title", "text"]
};
</script>

<style lang="scss">
.box {
  width: 550px;
  height: 350px;
}
.image-box {
  max-width: 550px;
  width: 100%;
  max-height: 350px;
  height: 100%;
}

.places {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 550px;
<<<<<<< Updated upstream
  margin: 20px;
=======
  margin-bottom: 100px;
>>>>>>> Stashed changes
}
</style>
