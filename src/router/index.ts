import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "monaco",
    component: () =>
    import(/* webpackChunkName: "Monaco" */ "../views/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/monaco",
    name: "monaco",
    component: () =>
      import(/* webpackChunkName: "Monaco" */ "../views/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
