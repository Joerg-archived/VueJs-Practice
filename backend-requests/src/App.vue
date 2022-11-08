<template>
  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
// We don't need this anymore when working with a functional backend
// data() {
//     return {
//       savedSurveyResults: [],
//     };
//   },
//   methods: {
//     storeSurvey(surveyData) {
//       const surveyResult = {
//         name: surveyData.userName,
//         rating: surveyData.rating,
//         id: new Date().toISOString(),
//       };
//       this.savedSurveyResults.push(surveyResult);
//       console.log(surveyResult);
//     },
//   },
};
</script>
<style scoped>

</style>