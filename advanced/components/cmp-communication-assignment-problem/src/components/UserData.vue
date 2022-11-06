<template>
  <div>
    <label>Username: </label>
    <input v-model="enteredName" @input="$emit('update-name', enteredName)" type="text" />
  </div>
  <div>
    <label>Age: </label>
    <input v-model="enteredAge" @input="$emit('update-age', enteredAge)" type="text" />
  </div>
</template>

<script>
export default {
  emits: ["update-name", "update-age"],
  data() {
    return {
      enteredAge: "",
      enteredName: ""
    }
  }
};
</script>

<style>
</style>