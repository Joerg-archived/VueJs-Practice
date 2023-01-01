<!-- Setup replaces beforeCreate and created lifecycle hooks -->
<script setup>
/* Using script setup has advantages regarding the setup method variant:
 *  + More succinct code with less boilerplate
 *  + Ability to declare props and emitted events using pure TypeScript
 *  + Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
 *  + Better IDE type-inference performance (less work for the language server to extract types from code)
 */
import { ref, computed, watch } from "vue";
// reactive is only for objects, ref for everyone
import { reactive, toRefs, provide } from "vue";
// lifecycle imports
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
// const userName = ref("Maximilian");
// const age = ref(30);

const name = reactive({
  firstName: "",
  lastName: "",
});

const lastNameInput = ref(null);

const user = reactive({
  // computed properties / refs are read only, i.e. you can't modify them with x.value = newValue
  // userName: computed(function () {
  //   return name.firstName + " " + name.lastName;
  // }),
  age: 30,
});

// Expose nested attributes as reactive
const { userName, age } = toRefs(user);
provide("userAge", age);

// setTimeout(function () {
//   // only user.value is reactive using "ref", to omit this we also can use "reactive" instead of "ref"
//   // refs.userName = "ref";
//   userName.value = "Max";
//   age.value = "33";
// }, 2000);

function incrementAge() {
  age.value++;
}

watch(age, function (newValue, oldValue) {
  console.log("New value: " + newValue);
  console.log("Old value: " + oldValue);
});

// function setFirstName(event) {
//   name.firstName = event.target.value;
// }

// function setLastName(event) {
//   name.lastName = event.target.value;
// }

function setLastName() {
  // First value is a reference to the input name declared with "ref=lastNameInput"
  name.lastName = lastNameInput.value.value;
}

onBeforeMount(function () {
  console.log("before mount");
});
onBeforeUpdate(function () {
  console.log("before update");
})
onUpdated(function() {
  console.log("on update");
})
</script>

<template>
  <section class="container">
    <user-data :firstName="name.firstName" :lastName="name.lastName" />

    <button @click="incrementAge">Increment age</button>
    <div>
      <input type="text" v-model="name.firstName" placeholder="First Name" />
      <input type="text" ref="lastNameInput" placeholder="Last Name" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import UserData from "./components/UserData.vue";
export default {
  components: [UserData],
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
