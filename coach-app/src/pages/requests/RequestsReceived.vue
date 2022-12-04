<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Error fetching Requests"
      @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <ul v-if="!isLoading && hasRequests">
          <li v-for="request in receivedRequests" :key="request.id">
            <request-item :email="request.email" :message="request.message">
            </request-item>
            <!-- {{ request.id }} -->
          </li>
        </ul>
        <div v-else-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadRequests();
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchData");
      } catch (error) {
        this.error = error.message;
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
