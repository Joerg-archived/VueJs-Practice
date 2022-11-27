import { createStore } from "vuex";

import CoachesModule from "./modules/coaches/index.js";
import RequestsModule from "./modules/requests/index.js";

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestsModule,
  },
  state() {
    return {
      coachId: "c3",
    };
  },
  getters: {
    coachId(state) {
      return state.coachId;
    },
  },
});

export default store;
