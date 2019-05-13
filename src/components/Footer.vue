<template>
  <section class="footer">
    <div class="footer-content">
      <div class="footer-content__first">
        <LinkFooter :image="footerIconChat" text="chat"/>
        <LinkFooter :image="footerIconEmail" text="hei@kokkos.io"/>
        <LinkFooter :image="footerIconPhone" text="(+47) 944 84 500"/>
      </div>
      <div class="footer-content__second">
        <p>921208332, Fredensborgveien 24 D, 0177, Oslo, Norway</p>
        <p class="semi-bold">Kokkos AS</p>
      </div>
    </div>
  </section>
</template>

<script>
import footerIconChat from "@/assets/footerIconChat.svg";
import footerIconEmail from "@/assets/footerIconEmail.svg";
import footerIconPhone from "@/assets/footerIconPhone.svg";

import LinkFooter from "@/components/LinkFooter.vue";

export default {
  components: { LinkFooter },
  computed: {
    footerIconChat() {
      return footerIconChat;
    },
    footerIconEmail() {
      return footerIconEmail;
    },
    footerIconPhone() {
      return footerIconPhone;
    }
  }
};
</script>

<style lang="scss">
.footer-content {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: $mobile) {
    display: none;
  }

  &__first {
    display: flex;
    justify-content: space-around;
    background-color: $color-primary;

    p {
      color: white;
      margin-bottom: 2px;
    }
  }

  &__second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #323a4f;

    p {
      color: white;
      margin-bottom: 2px;
      font-size: 16px;
    }
  }
}
</style>
