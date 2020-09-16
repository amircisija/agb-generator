import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Agb from "../views/Agb.vue";
import Agbundlb from "../views/Agbundlb.vue";
import AAgbundlb from "../views/AAgbundlb.vue";
import Impressum from "../views/Impressum.vue";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/agb",
    name: "agb",
    component: Agb
  },
  {
    path: "/agbundlb",
    name: "agbundlb",
    component: Agbundlb
  },
  {
    path: "/aagbundlb",
    name: "aagbundlb",
    component: AAgbundlb
  },
  {
    path: "/impressum",
    name: "impressum",
    component: Impressum
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;