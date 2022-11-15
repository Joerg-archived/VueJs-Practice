<template>
  <!-- Animation with multiple grouped elements -->
  <transition-group tag="ul" name="userlist">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input ref="username" type="text" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "Julie", "Angela", "Michaela"],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.username.value);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.userlist-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.userlist-enter-active {
  transition: all 1s ease-out;
}

.userlist-enter-to,
.userlist-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.userlist-leave-active {
  transition: all 1s ease-in;
  /* so r */
  position: absolute;
}

.userlist-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.userlist-move {
  transition: transform 0.8s ease;
}
</style>
