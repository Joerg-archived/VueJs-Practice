export default {
  addRequest(state, payload) {
    console.log(payload);
    state.requests.unshift(payload);
  },
};
