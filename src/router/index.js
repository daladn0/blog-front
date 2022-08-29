/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import store from "@/store/index";

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
    component: () => import("@/views/Posts/SinglePostPage.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/create-post",
    name: "create-post",
    component: () => import("@/views/Posts/CreatePost.vue"),
    meta: {
      layout: "MainLayout",
      authRequired: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/LoginPage.vue"),
    meta: {
      layout: "EmptyLayout",
      authForbidden: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/Auth/SignupPage.vue"),
    meta: {
      layout: "EmptyLayout",
      authForbidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters["user/isAuth"];

  // user doesn't have to be neither logged in nor logged out
  if (!to.meta.authRequired && !to.meta.authForbidden) return next();

  // user has to be logged in
  if (to.meta.authRequired && !isAuth) return next({ name: "home" });

  // user has to be logged out
  if (to.meta.authForbidden && isAuth) return next({ name: "home" });

  next();
});

export default router;
