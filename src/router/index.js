import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/catalogs",
    name: "catalogs",
    component: () => import("../views/Catalogs.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "*",
    name: "app-not-found",
    component: () => import("../views/AppNotFound.vue")
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;