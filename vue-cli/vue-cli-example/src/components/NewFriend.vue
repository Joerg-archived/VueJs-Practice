<template>
  <div>
    <form @submit.prevent="addFriend">
      <div>
        <label>ID: </label>
        <input v-model="friend.id" type="text" />
      </div>
      <div>
      <label>Name: </label>
      <input v-model="friend.name" type="text" />
      </div>
      <div>
      <label>Phone: </label>
      <input v-model="friend.phoneNumber" type="text" />
      </div>
      <div>
      <label>E-Mail: </label>
      <input v-model="friend.emailAddress" type="text" />
      </div>
      <div>
      <input type="checkbox" v-model="friend.isFavorite" />
      <label>Favorite</label>
      </div>
      <button type="submit">
        Add friend
      </button>
    </form>
  </div>
</template>


<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      friend: {
        id: "",
        name: "",
        phoneNumber: "",
        emailAddress: "",
        isFavorite: false,
      },
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", this.friend);
      this.reset();
    },
    reset() {
      this.friend.id = "";
      this.friend.name = "";
      this.friend.phoneNumber = "";
      this.friend.emailAddress = "";
      this.friend.isFavorite = false;
    },
  },
};
</script>

<style>

</style>
