<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? " (Favorite)" : "" }}</h2>
    <button @click="toggleButton">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
     <!-- We can else emit an event without creating an extra 
     method for it.
      -->
     <button @click="$emit('delete-friend', id)">
      Delete
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template> 
<script>
export default {
  // read only
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  // To make some prop validation we can use type validations
  // Supported:
  // - String
  // - Number
  // - Boolean
  // - Array
  // - Object
  // - Date
  // - Function
  // - Symbol
  // - any constructor functions (e.g. built-ins like Date)
  // and/or custom validations as follows:
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // This is for documentation so developer knows which events are emitted
  // by this component
  // emits: {
  //   "toggle-favorite": function (id) {
  //     // custom validation for id
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("id not provided!");
  //       return false;
  //     }
  //   },
  // },
  emits: ['toggle-favorite', 'delete-friend'],
  data() {
    return {
      detailsAreVisible: true,
      //friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleButton() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // Props communication is unidirectional, i.e. setting it in the component
      // is not working.
      // To establish the communication back to the parent and updating the data
      // we can use $emit to create a new "event" that can be used in the app
      // template with @toggle-favorite which also provides an arbitrary amount
      // of parameters we can define here
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>