import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page.vue";

Vue.use(VueRouter);

const routes = [
  {
  path: "/",
  name: "home-page",
  component: homePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
