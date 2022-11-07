<template>
<!-- In vue2 this is not possible using multiple fragments, there you had
to use one root element, otherwise vue2 would throw you an error -->
  <h2>Manage Goals</h2>
  <input type="text" ref="enteredValue"/>
  <button @click="setGoal">Set goal</button>
  <!-- to persist semantical correctness,
  we can move the rendering of the alert to another place (e.g the body)
  with the teleport key word
   -->
<teleport to="body">
  <error-alert v-if="isEnteredValueInvalid">
    <h2>Error! Input is invalid!</h2>
    <p>Please enter at least a few characters...</p>
    <button @click="resetInvalidState">Okay</button>
  </error-alert>
</teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isEnteredValueInvalid: false
    }
  },
  methods: {
    setGoal() {
      if (this.$refs.enteredValue.value === '') {
        this.isEnteredValueInvalid = true;
      }
    },
    resetInvalidState() {
      this.isEnteredValueInvalid = false;
    }
  }
}
</script>
