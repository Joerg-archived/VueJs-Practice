<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }" @click="activate('poor')">
      <button type="button">Poor</button>
    </li>
    <li
      :class="{ active: modelValue === 'average' }"
      @click="activate('average')"
    >
      <button type="button">Average</button>
    </li>
    <li
      :class="{ active: modelValue === 'great' }"
      @click="activate('great')"
    >
      <button type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // To enable v-model when using this component
  props: ["modelValue"],
  emit: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: null,
  //   };
  // },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(182, 2, 113);
}

.active button {
  color: rgb(182, 2, 113);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>