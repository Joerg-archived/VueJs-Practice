export default {
  async addCoach(context, payload) {
    // TODO: replace that by authenticated users id
    const id = context.rootGetters.coachId;
    const newCoach = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const response = await fetch(
      `https://vue-http-requests-36921-default-rtdb.europe-west1.firebasedatabase.app/coaches/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newCoach),
      }
    );
    if (!response.ok) {
      // error...
    }

    context.commit("addCoach", {
      ...newCoach,
      id: id,
    });
  },

  async fetchData(context, payload) {
    if (!payload.forceFetch && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      "https://vue-http-requests-36921-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
    );
    if (!response.ok) {

      const error = new Error(
        response.status + " - " + response.statusText || "failed to fetch data"
      );
      throw error;
    }
    context.state.coaches = [];
    const responseData = await response.json();
    for (const id in responseData) {
      context.commit("addCoach", {
        ...responseData[id],
        id: id,
      });
    }

    context.state.lastFetched = new Date().getTime();
  },
};
