export default {
  increment(context) {
    // context also have dispatch to interact with other actions (i.e. error handling actions)

    // this would not be allowed in mutations since there it has to be guaranteed to be
    // synchronous
    setTimeout(function () {
      context.commit("increment");
    }, 2000);
  },
  increase(context, payload) {
    context.commit("increase", payload);
  },
};
