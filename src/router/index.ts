import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "welcome",
    component: () => import("@/pages/HelloEveryOne.vue"),
    alias: "/welcome",
    meta: {
      title: "愿世界和平！",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login/index.vue"),
    meta: {
      title: "开启一天好心情！",
    },
  },
  {
    path: "/show",
    name: "show",
    component: () => import("@/pages/MultipleShow/index.vue"),
    meta: {
      title: "展示不一样的美好！",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
