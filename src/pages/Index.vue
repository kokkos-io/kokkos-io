<template>
  <Layout>
    <ToggleLang />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ChatMessenger from "@/components/ChatMessenger.vue";
import ToggleLang from "@/components/ToggleLang.vue";

@Component({
  components: {
    ToggleLang,
    ChatMessenger
  }
})
export default class Index extends Vue {
  className = "light";
  toggleImage = false;
  mounted() {
    this.$store.commit("setLoading", false);
  }
  changeBackground() {
    if (this.toggleImage) {
      this.className = "light";
      this.toggleImage = !this.toggleImage;
    } else {
      this.className = "dark";
      this.toggleImage = !this.toggleImage;
    }
  }
}
</script>
