import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import GAQ from "./views/GAQ";
import Contact from "./views/Contact";
import OurWork from "./views/OurWork";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/get-a-quote",
      name: "Get a Quote",
      component: GAQ
    },

    {
      path: "/contact",
      name: "Contact Us",
      component: Contact
    },

    {
      path: "/our-work",
      name: "Our Work",
      component: OurWork
    }
  ]
});
