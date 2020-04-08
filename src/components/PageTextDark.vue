<template>
  <div>
    <div class="toggle-lang dark-color">
      <button @click="toggleLang = !toggleLang">EN / NO</button>
    </div>
    <div v-if="toggleLang" class="eng">
      <!-- <EnglishText color="dark-color" highlight="gradient" /> -->
    </div>
    <div v-if="!toggleLang" class="norw">
      <!-- <NorwegianText color="dark-color" highlight="gradient">
        <g-image class="image" src="@/assets/logoPure.svg" />
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
export default class PageTextDark extends Vue {
  toggleLang = true;
}
</script>

<style lang="scss">
.dark-color {
  color: $primary;
}

.image {
  width: 150px;
}

.gradient {
  background: linear-gradient(
    0.25turn,
    rgba(244, 124, 111, 0.35),
    rgba(254, 239, 123, 0.35)
  );
  border-radius: 3px;
  padding: 0px 2px;
  cursor: pointer;
}
</style>
