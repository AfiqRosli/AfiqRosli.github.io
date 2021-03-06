import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";

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
    component: Project
  }
];

const router = new VueRouter({
  mode: "history",
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
