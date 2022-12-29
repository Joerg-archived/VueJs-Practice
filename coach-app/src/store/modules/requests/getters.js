export default {
  requests(state, _, _2, rootGetters) {
    const loggedInCoachId = rootGetters["userId"];
    return state.requests.filter(request => request.coachId === loggedInCoachId );
  },
  hasRequests(_, getters) {
      return getters.requests?.length > 0;
  },
};
