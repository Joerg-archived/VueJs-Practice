<template>
  <transition name="fade-button" mode="out-in">
    <button v-if="isUserLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["isUserLoggedIn"]),
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
  },
};
</script>

<style>
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.1s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.1s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style>
