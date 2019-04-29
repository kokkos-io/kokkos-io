<template>
  <section class="work">
    <div class="work__heading ma-2">
      <h1>Work</h1>
      <p>What we have previously done or are currently working on.</p>
    </div>
    <div class="wrapper">
      <LinkPrevWork
        :image="freiaLogo"
        title="Freia"
        text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
      />
      <LinkPrevWork
        title="Netlife"
        text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
      />
      <LinkPrevWork
        class="ruter"
        :image="ruterLogo"
        title="Ruter"
        text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
      />
      <LinkPrevWork
        :image="gjensidigeLogo"
        title="Gjensidige"
        text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
      />
    </div>
    <Leaf/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
import LinkPrevWork from "@/components/LinkPrevWork";
import gjensidigeLogo from "@/assets/gjensidige_logo.svg";
import freiaLogo from "@/assets/freia_logo.svg";
import ruterLogo from "@/assets/ruter-logo.png";

export default {
  components: { Leaf, LinkPrevWork },
  computed: {
    gjensidigeLogo() {
      return gjensidigeLogo;
    },
    freiaLogo() {
      return freiaLogo;
    },
    ruterLogo() {
      return ruterLogo;
    }
  }
};
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    display: flex;
    justify-content: space-around;
    max-width: $size-nav-bar;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;

    .ruter {
      .box {
        background-color: red;
        padding: 150px;
      }
    }
  }
}
</style>
