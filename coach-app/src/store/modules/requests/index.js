import RequestsGetters from "./getters.js";
import RequestsMutations from "./mutations.js";
import RequestsActions from "./actions.js";

export default {
  namespaced: true,
  getters: RequestsGetters,
  mutations: RequestsMutations,
  actions: RequestsActions,
};
