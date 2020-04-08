<template>
  <div>
    <div class="messenger">
      <div id="fb-root"><p :class="chatColor" class="chat-link">Chat</p></div>
      <!-- Your customer chat code -->
      <div
        class="fb-customerchat"
        attribution="setup_tool"
        page_id="2663864093631628"
        theme_color="#262F4A"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! How can we help you?"
      ></div>
      <!-- <helmet-provider>
        <helmet>
          <script></script>
        </helmet>
      </helmet-provider> -->
    </div>
  </div>
</template>
<script>
//import { Helmet, HelmetProvider } from "@jnields/vue-helmet";

import Vue from "vue";
import Component from "vue-class-component";

@Component({
  //components: { HelmetProvider, Helmet }
  props: {
    chatColor: {
      type: Object
    }
  }
})
export default class ChatMessenger extends Vue {
  // beforeCreate() {
  //   function initializeMessenger() {
  //     const d = document;
  //     const s = "script";
  //     const id = "facebook-jssdk";

  //     const fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     const js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }
  // }

  mounted() {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: "v6.0"
      });
    };

    function initializeMessenger() {
      const d = document;
      const s = "script";
      const id = "facebook-jssdk";

      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }

    initializeMessenger();
  }

  // initializeMessenger() {
  //   const d = document;
  //   const s = "script";
  //   const id = "facebook-jssdk";

  //   const fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   const js = d.createElement(s);
  //   js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }
}
</script>
