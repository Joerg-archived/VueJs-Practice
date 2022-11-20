import numberMutations from "./mutations.js";
import numberGetters from "./getters.js";
import numberActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: numberMutations,
  getters: numberGetters,
  actions: numberActions,
};
