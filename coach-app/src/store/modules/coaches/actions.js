export default {
  addCoach(context, payload) {
    const id = context.rootGetters.userId;
    context.commit("addCoach", {
      id: id,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    });
  },
};
