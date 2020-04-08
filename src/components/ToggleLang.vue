<template>
  <div :class="{ backgroundColor: toggleImage }" class="content-wrapper">
    <div class="toggle-lang">
      <input type="radio" id="eng" value="true" v-model="lang" />
      <label :class="{ color: toggleImage }" for="eng">EN</label>
      <span :class="{ color: toggleImage }" class="divider">/</span>
      <input type="radio" id="norw" value="false" v-model="lang" />
      <label :class="{ color: toggleImage }" for="norw">NO</label>
    </div>

    <div class="toggle-color">
      <button class="color-button" @click="toggleImage = !toggleImage">
        <g-image v-if="toggleImage" src="@/assets/sun.svg" />
        <g-image v-else src="@/assets/moon.svg" />
      </button>
    </div>

    <NorwText
      :highlight="{ gradient: !toggleImage }"
      :textColor="{ color: toggleImage }"
      v-if="lang === 'false'"
    >
      <g-image
        v-if="toggleImage"
        class="image"
        src="@/assets/logoAltered.svg"
        width="150"
      />
      <g-image v-else class="image" src="@/assets/logoPure.svg" width="150" />
    </NorwText>
    <EngText
      :highlight="{ gradient: !toggleImage }"
      :textColor="{ color: toggleImage }"
      v-if="lang === 'true'"
    >
      <g-image
        v-if="toggleImage"
        class="image"
        src="@/assets/logoAltered.svg"
        width="150"
      />
      <g-image v-else class="image" src="@/assets/logoPure.svg" width="150" />
    </EngText>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import NorwText from "@/components/NorwText.vue";
import EngText from "@/components/EngText.vue";
import Fade from "@/components/Fade.vue";
@Component({
  components: {
    NorwText,
    EngText,
    Fade
  }
})
export default class ToggleLang extends Vue {
  lang = "false";
  toggleImage = "false";
}
</script>
