import RequestsGetters from "./getters.js";
import RequestsMutations from "./mutations.js";
import RequestsActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      // lists of {coachid, list of requests}
      requests: [],
    };
  },
  getters: RequestsGetters,
  mutations: RequestsMutations,
  actions: RequestsActions,
};
