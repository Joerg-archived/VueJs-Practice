import CoachesGetters from "./getters.js";
import CoachesMutations from "./mutations.js";
import CoachesActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetched: null,
      coaches: [],
    };
  },
  getters: CoachesGetters,
  mutations: CoachesMutations,
  actions: CoachesActions,
};
