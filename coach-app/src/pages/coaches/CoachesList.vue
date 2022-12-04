<template>
  <div>
    <!-- Transform string to boolean -->
    <base-dialog
      :show="!!error"
      title="Error fetching data"
      @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button v-if="!isCoach && !isLoading" link to="/register">
            Register as coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches && !error">
          <li v-for="coach in filteredCoaches" :key="coach.id">
            <coach-item
              :id="coach.id"
              :first-name="coach.firstName"
              :last-name="coach.lastName"
              :areas="coach.areas"
              :description="coach.description"
              :rate="coach.hourlyRate"></coach-item>
          </li>
        </ul>
        <h1 v-else>No coaches found!</h1>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/getAll"];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(forceRefresh = false) {
      this.isLoading = true;
      let that = this;
      try {
        await this.$store.dispatch("coaches/fetchData", {
          forceFetch: forceRefresh,
        });
      } catch (error) {
        this.error = error.message;
        console.dir(error);
      } finally {
        this.isLoading = false;
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
