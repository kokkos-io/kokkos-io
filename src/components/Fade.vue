<template>
  <div ref="fade-in-view">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    transitionClass: {
      type: String,
      default: "fade-in"
    },
    transitionClassTrigger: {
      type: String,
      default: "start"
    },
    direction: {
      type: String,
      default: "up"
    },
    transitionDelay: {
      type: Number,
      default: 120
    }
  }
})
export default class Fade extends Vue {
  mounted() {
    this.startObserving();
  }

  // transition when element is in view
  startObserving() {
    const elements = [...(this.$refs["fade-in-view"] as any).children];

    if (!window.IntersectionObserver) return;

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        // add class that makes the transition
        if (entry.isIntersecting) {
          // @ts-ignore
          entry.target.classList.add(this.transitionClassTrigger);
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((el, index) => {
      // @ts-ignore
      let classes = this.transitionClass;

      // @ts-ignore
      const delay = this.transitionDelay * index;

      if (delay) {
        const delayClass = `transition-delay-${String(delay)}`;
        el.classList.add(delayClass);
      }

      // @ts-ignore
      const direction = `transition-direction--${String(this.direction)}`;

      el.classList.add(classes);
      el.classList.add(direction);
      observer.observe(el);
    });
  }
}
</script>
<style lang="scss">
$moveAmount: 25px;

@for $i from 0 to 20 {
  $delay: $i * 120;
  $delayTime: calc(#{$i} * 120ms);

  .transition-delay-#{$delay} {
    transition-delay: $delayTime !important;
  }
}

.transition-direction {
  &--up {
    transform: translate3d(0, $moveAmount, 0);
  }

  &--right {
    transform: translate3d(-$moveAmount, 0, 0);
  }

  &--down {
    transform: translate3d(0, -$moveAmount, 0);
  }

  &--left {
    transform: translate3d($moveAmount, 0, 0);
  }
}

.fade-in-early.start,
.fade-in.start {
  opacity: 1;
  transform: translateZ(0);
}

.fade-in,
.fade-in-early {
  opacity: 0;
  will-change: opacity, transform;
  transition: opacity 1s, transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
