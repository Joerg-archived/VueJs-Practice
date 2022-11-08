<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchResults"
          >Load Submitted Experiences
        </base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p class="error" v-else-if="error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No data available. Please start by adding your experience!
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    fetchResults() {
      this.error = null;
      this.isLoading = true;
      var that = this;
      fetch(
        "https://vue-http-requests-36921-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then(function (response) {
          that.isLoading = false;
          if (response.ok) {
            return response.json();
          } else {
            throw Error(
              "Data could not be fetched: " +
                response.status +
                " - " +
                response.statusText
            );
          }
        })
        .then(function (data) {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          that.results = results;
        })
        .catch(function (error) {
          that.isLoading = false;
          that.error = error;
        });
    },
  },
  mounted() {
    this.fetchResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p.error {
  color: red;
}
</style>