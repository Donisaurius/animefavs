import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from "@/modules/pokemon/pages/AboutPage.vue";
import HomePage from "@/modules/pokemon/pages/HomePage.vue";
import NotFound404 from "@/modules/shared/pages/NotFound404.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
