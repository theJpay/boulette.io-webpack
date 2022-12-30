import tools from "@/tools";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import appRoutes from "../views/app/routes";
import LoginView from "../views/LoginView.vue";

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
    path: "/:catchAll(.*)",
    redirect: { name: "app" },
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
