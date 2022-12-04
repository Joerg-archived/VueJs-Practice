<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button
          @click="toggleContactActive"
          v-if="contactActive"
          link
          :to="homeLink"
          >Contact</base-button
        >
        <base-button @click="toggleContactActive" v-else link :to="contactLink"
          >Contact</base-button
        >
      </header>
      <router-view :id="id"></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in selectedCoach.areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
      contactActive: false,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + "/contact";
    },
    homeLink() {
      return "/coaches/" + this.id;
    },

    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
  },
  methods: {
    toggleContactActive() {
      this.contactActive = !this.contactActive;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/getAll"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
