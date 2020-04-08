<template>
  <a v-if="isChat" @click="triggerChatlio()" data-chatlio-widget-button>
    <slot></slot>
    <!-- Add this div in your DOM where you want the inline div to be inserted by Chatlio, change height/width to fit your needs -->
    <!-- <div id="chatlioWidgetPlaceholder" style="margin: auto; height: 400px;width:400px;"></div> -->
  </a>
  <a v-else :href="href">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    isChat: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    if (process.isClient) {
      window._chatlio = window._chatlio || [];
      !(function() {
        var t = document.getElementById("chatlio-widget-embed");
        if (t && window.ChatlioReact && _chatlio.init)
          return void _chatlio.init(t, ChatlioReact);
        for (
          var e = function(t) {
              return function() {
                _chatlio.push([t].concat(arguments));
              };
            },
            i = [
              "configure",
              "identify",
              "track",
              "show",
              "hide",
              "isShown",
              "isOnline",
              "page",
              "open",
              "showOrHide"
            ],
            a = 0;
          a < i.length;
          a++
        )
          _chatlio[i[a]] || (_chatlio[i[a]] = e(i[a]));
        var n = document.createElement("script"),
          c = document.getElementsByTagName("script")[0];
        (n.id = "chatlio-widget-embed"),
          (n.src = "https://w.chatlio.com/w.chatlio-widget.js"),
          (n.async = !0),
          n.setAttribute("data-embed-version", "2.3");
        n.setAttribute("data-widget-options", '{"embedSidebar": true}');
        n.setAttribute(
          "data-widget-id",
          "87aaa718-1fef-4094-76a0-dd3ac1aebf47"
        );
        c.parentNode.insertBefore(n, c);
      })();
    }
  },

  methods: {
    triggerChatlio() {
      window._chatlio.showOrHide();
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  cursor: pointer;
  line-height: 50px;
  color: $secondary;
}

.chatlio-powered-by {
  display: none;
}
#chatlio-widget {
  .chatlio-powered-by {
    background-color: blue;
    display: none !important;
  }
}
</style>