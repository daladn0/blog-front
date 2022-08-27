import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/post/:id",
    name: "single-post",
    component: () => import("@/views/SinglePostPage.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupPage.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
