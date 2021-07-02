import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/docs",
    component: () => import("@/views/docs/DocLayout.vue"),
    children: [
      {
        // button component
        path: "button",
        name: "button",
        component: () => import("@/views/docs/button/Button.vue"),
      },
      {
        // input component
        path: "input",
        name: "input",
        component: () => import("@/views/docs/input/Input.vue"),
      },
      {
        // dropdown component
        path: "dropdown",
        name: "dropdown",
        component: () => import("@/views/docs/dropdown/Dropdown.vue"),
      },
      {
        // tooltip component
        path: "tooltip",
        name: "tooltip",
        component: () => import("@/views/docs/tooltip/Tooltip.vue"),
      },
      {
        // util component
        path: "util",
        name: "util",
        component: () => import("@/views/docs/util/Util.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
