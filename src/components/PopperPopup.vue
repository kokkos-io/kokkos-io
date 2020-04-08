<template>
  <span>
    <button
      :class="highlight"
      @mouseenter="show"
      @hover="show"
      @focus="show"
      @mouseleave="hide"
      @blur="hide"
      ref="tooltipButton"
      id="button"
      aria-describedby="tooltip"
    >
      {{ referenceElement }}
    </button>

    <div ref="tooltip" id="tooltip" role="tooltip">
      <div class="pop-up">
        {{ popperContent }}
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { createPopper } from "@popperjs/core";
import Fade from "@/components/Fade.vue";
@Component({
  props: {
    referenceElement: {
      type: String
    },
    popperContent: {
      type: String
    },
    highlight: {
      type: Object
    }
  },
  components: {
    Fade
  }
})
export default class PopperPopup extends Vue {
  tooltip: HTMLElement | null = null;
  popper: any = null;

  create() {
    const button = this.$refs.tooltipButton as Element;
    this.tooltip = this.$refs.tooltip as HTMLElement;
    this.popper = createPopper(button, this.tooltip, {
      placement: "top"
    });
  }

  destroy() {
    if (this.popper) {
      //this.popper.destroy();
      this.popper = null;
    }
  }

  show() {
    this.tooltip!.setAttribute("data-show", "");
    this.create();
  }

  hide() {
    this.tooltip!.removeAttribute("data-show");
    this.destroy();
  }

  mounted() {
    this.create();
  }
}
</script>

<style lang="scss">
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.pop-up {
  animation-name: example;
  animation-duration: 0.2s;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
