import { createRouter, createWebHistory } from "vue-router";
import tools from "@/tools";
import { getUserState } from "@/services/users";
import appRoutes from "../views/app/routes";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import type { RouteRecordRaw } from "vue-router";

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

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await getUserState();
  console.log({ isAuthenticated });
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnAuth = to.matched.some(
    (record) => record.meta.requiresUnAuth
  );
  if (requiresAuth && !isAuthenticated) {
    next({ name: "login" });
    return;
  }
  if (requiresUnAuth && isAuthenticated) {
    next({ name: "home" });
    return;
  }
  next();
});

export default router;
