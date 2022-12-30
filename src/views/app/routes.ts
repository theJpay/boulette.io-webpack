import tools from "@/tools";

const HomeView = () => import(/* webpackChunkName: "about" */ "./HomeView.vue");

export default [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    beforeEnter: () => {
      tools.setTabName("Home");
    },
  },
];
