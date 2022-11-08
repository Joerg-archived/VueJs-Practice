<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  props: ['teamId'],
  inject: ["users", "teams"],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // console.log(this.$route.query);
      // To make the component more usable we can auto inject props in the routing definition more
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === this.teamId);
      const selectedUsers = [];
      // console.log(selectedTeam.members);
      for (const member of selectedTeam.members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedUsers.push(selectedUser);
      }
      this.members = selectedUsers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // data is loaded but not shown yet
    this.loadTeamMembers(this.$route);
  },
  beforeRouteUpdate(from, to, next) {
    console.log("Before update new data");
    next();
  },
  watch: {
    teamId(newTeamId) {
      this.loadTeamMembers(newTeamId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>