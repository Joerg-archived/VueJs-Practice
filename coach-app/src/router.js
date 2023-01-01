import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: () => import("./pages/coaches/CoachesList.vue") },
    {
      path: "/coaches/:id",
      component: () => import("./pages/coaches/CoachesDetail.vue"),
      props: true,
      children: [
        { path: "contact", component: () => import("./pages/requests/CoachContact.vue") }, // /coaches/c1/contact
      ],
    },
    {
      path: "/register",
      component: () => import("./pages/coaches/CoachRegistration.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: () => import("./pages/requests/RequestsReceived.vue"),
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: () => import("./pages/auth/UserAuth.vue"), meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: () => import("./pages/NotFound.vue") },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isLoggedIn) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
