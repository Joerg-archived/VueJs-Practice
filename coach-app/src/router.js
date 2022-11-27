import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetails from "./pages/coaches/CoachesDetail.vue";
import CoachContact from "./pages/requests/CoachContact.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ReceivedRequests from "./pages/requests/Requests.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachesDetails,
      props: true,
      children: [
        { path: "contact", component: CoachContact }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: ReceivedRequests },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
