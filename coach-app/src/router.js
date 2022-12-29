import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetail from "./pages/coaches/CoachesDetail.vue";
import CoachContact from "./pages/requests/CoachContact.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ReceivedRequests from "./pages/requests/RequestsReceived.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachesDetail,
      props: true,
      children: [
        { path: "contact", component: CoachContact }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration, meta: { requiresAuth: true } },
    { path: "/requests", component: ReceivedRequests, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
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
