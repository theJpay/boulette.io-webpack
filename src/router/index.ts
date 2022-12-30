import { createRouter, createWebHistory } from "vue-router";
import tools from "@/tools";
import appRoutes from "../views/app/routes";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import type { RouteRecordRaw } from "vue-router";

const IS_AUTHED = false;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    children: [...buildAppRoutes()],
    redirect: { name: "home" },
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: () => {
      tools.setTabName("Login");
    },
    meta: { requiresUnAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    beforeEnter: () => {
      tools.setTabName("Register");
    },
    meta: { requiresUnAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" },
  },
];

function buildAppRoutes() {
  return [...appRoutes];
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnAuth = to.matched.some(
    (record) => record.meta.requiresUnAuth
  );
  if (requiresAuth && !IS_AUTHED) {
    next({ name: "login" });
    return;
  }
  if (requiresUnAuth && IS_AUTHED) {
    next({ name: "home" });
    return;
  }
  next();
});

export default router;
