// import VueRouter from "vue-router";
import Main from "./components/main";
import LinkerPro from "./components/main";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/about", component: Main },
  { path: "/ ", component: LinkerPro },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
