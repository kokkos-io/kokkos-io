export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/martine/WEB/PROSJEKTER/midlertidig/kokkos-io/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/martine/WEB/PROSJEKTER/midlertidig/kokkos-io/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/martine/WEB/PROSJEKTER/midlertidig/kokkos-io/node_modules/gridsome/app/pages/404.vue")
  }
]

