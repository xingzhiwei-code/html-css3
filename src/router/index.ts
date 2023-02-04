import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: "愿世界和平！",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login/index.vue"),
    meta: {
      title: "让我们的相识从登录开始！",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home/index.vue"),
    meta: {
      title: "开启一天好心情！",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
