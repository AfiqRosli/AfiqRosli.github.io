import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("../views/Project.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    if (this.currentRoute.name == "Home") {
      return { x: 9999, y: 9999 };
    }

    if (this.currentRoute.name == "Project") {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
