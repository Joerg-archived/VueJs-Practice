<script setup>
// COMPOSITION API
import { ref, toRefs, reactive } from "vue";

const goal = ref("Learning vue!");
const showButton = ref(true);

const goalObject = ref({
  goal: "Learning vue",
  show: true,
});

const goalReactiveObject = reactive({
  goal: "Learning reactive vue!",
  show: true,
});

function toggleButtonSeparateRef() {
  // separate ref
  showButton.value = !showButton.value;
}

function toggleButtonRefObject() {
  goalObject.value.show = !goalObject.value.show;
}

function toggleButtonReactiveObject() {
  goalReactiveObject.show = !goalReactiveObject.show;
}
</script>

<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showButton">{{ goal }}</h3>
  <h3 v-if="goalObject.show">{{ goalObject.goal }}</h3>
  <h3 v-if="goalReactiveObject.show">{{ goalReactiveObject.goal }}</h3>
  <h3 v-if="optionsApiShowButton">{{ optionsApiGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleButtonSeparateRef">Toggle Goal with separate Ref</button>
  <button @click="toggleButtonRefObject">Toggle Goal with ref object</button>
  <button @click="toggleButtonReactiveObject">Toggle Goal with reactive object</button>
  <button @click="toggleOptionsApiGoal">Toggle Options API goal!</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>
<script>
export default {
  data() {
    return {
      optionsApiGoal: "Learning vue with Options Api!",
      optionsApiShowButton: true,
    };
  },
  methods: {
    toggleOptionsApiGoal() {
      this.optionsApiShowButton = !this.optionsApiShowButton;
    },
  },
};
</script>
<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
