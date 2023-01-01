<script setup>
/* Using script setup has advantages regarding the setup method variant:
 *  + More succinct code with less boilerplate
 *  + Ability to declare props and emitted events using pure TypeScript
 *  + Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
 *  + Better IDE type-inference performance (less work for the language server to extract types from code)
 */
import { ref } from "vue";
// reactive is only for objects, ref for everyone
import { reactive, toRefs } from "vue";
// const userName = ref("Maximilian");
// const age = ref(30);

const user = reactive({
  userName: "Maximilian",
  age: 30,
});
// Expose nested attributes as reactive
const { userName, age } = toRefs(user);

// setTimeout(function () {
//   // only user.value is reactive using "ref", to omit this we also can use "reactive" instead of "ref"
//   // refs.userName = "ref";
//   userName.value = "Max";
//   age.value = "33";
// }, 2000);

function incrementAge() {
  age.value++;
}
</script>

<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="incrementAge">Increment age</button>
  </section>
</template>

<script>
export default {
  setup() {
    // Only values created with "ref" will be reactive
    // const uName = ref("Maximilian");
    // setTimeout(function() {
    //   uName.value = "Max";
    // }, 2000)
    // return what we want to expose for the template
    // return { userName: uName};
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
