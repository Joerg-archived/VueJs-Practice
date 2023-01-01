<script setup>
import { computed, provide, inject} from "vue";

const emits = defineEmits();
console.log(emits);

const props = defineProps(["firstName", "lastName"]);

const age = inject("userAge");
const userName = computed(function () {
  return props.firstName + " " + props.lastName;
});
</script>

<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
export default {
  // props: ["firstName", "lastName", "age"],
};
</script>
