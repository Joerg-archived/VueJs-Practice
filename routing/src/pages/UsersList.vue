<template>
  <button @click="goTeams">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    goTeams() {
      // Navigate to teams page
      this.$router.push("/teams");
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteLeave(from, to, next) {
    if (!this.changesSaved) {
      const confirmed = confirm(
        "Do you really want to leave the page? Your changes will be lost!"
      );
      next(confirmed);
    } else {
      next();
    }
  },
  beforeRouteEnter(from, to, next) {
    console.log("before enter user cmp");
    next();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>