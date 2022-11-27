export default {
  getAll(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches?.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.getAll;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};
