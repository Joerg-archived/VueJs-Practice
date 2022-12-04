export default {
  async addRequest(context, payload) {
    const request = {
      email: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-requests-36921-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(request),
      }
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const responseData = await response.json();

    context.commit("addRequest", {
      ...request,
      id: responseData.name,
      coachId: payload.id,
    });
  },
  async fetchData(context) {
    const coachId = context.rootGetters.coachId;
    const response = await fetch(
      `https://vue-http-requests-36921-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    if (!response.ok) {
      // error
      const error = new Error(
        response.status + " - " + response.statusText || "failed to fetch data"
      );
      throw error;
    }
    context.state.requests = [];
    const responseData = await response.json();
    for (const id in responseData) {
      context.commit("addRequest", {
        ...responseData[id],
        id: id,
        coachId: coachId,
      });
    }
  },
};
