<template>
  <div>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </div>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/addCoach", data);
      // replace vs push: replace doesnt allow to go back, which is advisable since we dont want to go back
      // when the data is already submitted
      this.$router.replace("/coaches");
    },
  },
};
</script>
