// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuex from "vuex";
import store from "~/store";
import Layout from "~/layouts/Layout.vue";
import "~/styles/index.scss";

export default function(Vue, { appOptions, router, head, isClient }) {
  // add vuex
  Vue.use(Vuex);

  // start loading on route change
  router.beforeEach((to, from, next) => {
    store.commit("setLoading", true);
    next();
  });

  appOptions.store = store;

  // silence console logging
  Vue.config.productionTip = false;

  // set default base app component
  Vue.component("Layout", Layout);
}
