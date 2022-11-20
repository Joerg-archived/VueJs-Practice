import authMutations from "./mutations.js";
import authGetters from "./getters.js";
import authActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
    };
  },
  mutations: authMutations,
  getters: authGetters,
  actions: authActions,
};
