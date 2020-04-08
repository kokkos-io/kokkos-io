<template>
  <div>
    <div class="toggle-lang light-color">
      <button @click="toggleLang = !toggleLang">EN / NO</button>
    </div>
    <div v-if="toggleLang" class="eng">
      <!-- <EnglishText color="light-color" highlight="white-line" /> -->
    </div>
    <div v-if="!toggleLang" class="norw">
      <!-- <NorwegianText color="light-color" highlight="white-line">
        <g-image class="image" src="@/assets/logoAltered.svg" />
      </NorwegianText> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// import EnglishText from "@/components/EnglishText.vue";
// import NorwegianText from "@/components/NorwegianText.vue";
@Component({
  components: {
    // EnglishText
    // NorwegianText
  }
})
export default class PageTextLight extends Vue {
  toggleLang = true;
}
</script>

<style lang="scss">
.light-color {
  color: $secondary;
}

.image {
  width: 150px;
}

.white-line {
  border-bottom: 2px solid $secondary;
  cursor: pointer;
}
</style>
