<template>
  <section class="previous-work">
    <div class="work">
      <Header
        title="Work"
        description="Previous projects"
        text="Some of what we have previously done or are currently working on."
      />

      <div class="wrapper">
        <LinkPrevWork
          :image="freiaLogo"
          title="Freia"
          text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
        />
        <LinkPrevWork
          :image="freiaLogo"
          title="Netlife"
          text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
        />
        <LinkPrevWork
          :image="gjensidigeLogo"
          title="Ruter"
          text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
        />
        <LinkPrevWork
          :image="gjensidigeLogo"
          title="Gjensidige"
          text="Lorem ipsum dolor sit amet, aliquid molestie gubergren id eam, qui ne errem nostro volumus, eu numquam complectitur sit. Eam ut esse reprimique, at quo magna dicunt explicari. Utroque efficiendi no pro, possim dissentias an pro. Te putant aliquip elaboraret nec."
        />
      </div>
      <NavbarFooter/>
      <Footer/>
      <Leaf/>
    </div>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
import LinkPrevWork from "@/components/LinkPrevWork";
import NavbarFooter from "@/components/NavbarFooter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import gjensidigeLogo from "@/assets/gjensidige-logo2.svg";
import freiaLogo from "@/assets/freia_logo.svg";
export default {
  components: {
    Leaf,
    LinkPrevWork,
    NavbarFooter,
    Footer,
    Header
  },
  computed: {
    gjensidigeLogo() {
      return gjensidigeLogo;
    },
    freiaLogo() {
      return freiaLogo;
    }
  }
};
</script>

<style lang="scss">
.previous-work {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .work {
    max-width: $size-nav-bar;
    width: 100%;
    &__heading {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 100px;

      h1 {
        font-size: 300px;
        line-height: 270px;

        @media (max-width: $mobile) {
          font-size: 150px;
          line-height: 135px;
        }

        @media (max-width: $mobile-xs) {
          font-size: 100px;
          line-height: 100px;
        }
      }

      h4 {
        font-size: 60px;

        @media (max-width: $mobile) {
          font-size: 30px;
        }

        @media (max-width: $mobile-xs) {
          font-size: 23px;
        }
      }

      p {
        font-size: 25px;
        max-width: 480px;
        width: 100%;

        @media (max-width: $mobile) {
          font-size: 18px;
          max-width: 200px;
        }
      }
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      max-width: $size-nav-bar;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
    }
  }
}
</style>
