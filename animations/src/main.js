import { createApp } from "vue";
import { createRouter, createWebHistory, routerKey } from "vue-router";

import App from "./App.vue";
import AppRoutes from "./AppRoutes.vue";
import BaseModal from "./components/BaseModal.vue";
import AllUsers from "./pages/AllUsers.vue";
import CourseGoals from "./pages/CourseGoals.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AllUsers },
    { path: "/goals", component: CourseGoals },
  ],
});

// const app = createApp(App);
const app = createApp(AppRoutes);

app.component("base-modal", BaseModal);

app.use(routes);
// to avoid initial transitioning empty -> /
routes.isReady().then(function () {
  app.mount("#app");
});
