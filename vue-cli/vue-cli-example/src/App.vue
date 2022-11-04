<template>
  <header><h1>My Friends</h1></header>
  <ul>
    <new-friend @add-friend="addFriend" />
    <!-- To use other values than string as prop you have to v-bind these props
    for instance in is-favorite you have to change it to :is-favorite="true"
    (v-bind allows to execute javascript in "") since is-favorite="true" is always a String
     -->
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      v-bind="friend"
      @toggle-favorite="setFavorite"
      @delete-friend="deleteFriend"
    />
    <!-- We used here v-bind="friend" which could also be replaced with
    :id="friend.id"
    :name="friend.name"
    [...]

    But as the attributes are the same as the objects' we can abbreviate it with
    v-bind
      -->
  </ul>
</template>
<script>
// default export, i.e. when importing without "{}" this is what the other file get
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phoneNumber: "01234 5678 991",
          emailAddress: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phoneNumber: "09876 543 221",
          emailAddress: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    setFavorite(id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addFriend(friend) {
      this.friends.push({
        id: friend.id,
        name: friend.name,
        phoneNumber: friend.phoneNumber,
        emailAddress: friend.emailAddress,
        isFavorite: friend.isFavorite,
      });
    },
    deleteFriend(id) {
        this.friends = this.friends.filter(friend => friend.id !== id);
    }
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
