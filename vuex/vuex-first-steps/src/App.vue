<template>
  <base-container v-if="isAuth" title="Vuex">
    <the-counter></the-counter>
    <button @click="increase({ value: 12 })">Add 12</button>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.isUserLoggedIn;
    // },
    ...mapGetters("auth", {
      isAuth: "isUserLoggedIn",
    }),
  },
  methods: {
    ...mapActions("numbers", ["increase"]),
    addOne() {
      // this.$store.commit("increment");
      // run actions instead of mutations
      this.$store.dispatch("numbers/increment");
    },
    addTen() {
      this.$store.dispatch({
        type: "numbers/increase",
        value: 10,
      });
    },
  },
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
</style>
