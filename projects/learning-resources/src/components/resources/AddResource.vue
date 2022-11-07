<template>
  <base-card>
    <form @submit.prevent="addValidItem">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="enteredResource.title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="enteredResource.description"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" v-model="enteredResource.link" />
      </div>
      <div>
        <base-button type="submit"> Add Resource </base-button>
      </div>
    </form>
  </base-card>
  <base-alert v-if="showAlert" @click="resetError" @close="resetError">
    <template #errorTitle>
      <h2>{{ errorTitle }}</h2>
    </template>
    <template #errorMessage>
      <div>{{ errorMessage }}</div>
    </template>
    <template #actions>
      <base-button @click="resetError">Okay</base-button>
    </template>
  </base-alert>
</template>


<script>
import BaseButton from '../base/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ["addItem"],
  data() {
    return {
      enteredResource: {
        title: "",
        description: "",
        link: "",
      },
      errorTitle: "",
      errorMessage: "",
    };
  },
  computed: {
    showAlert() {
      return this.errorTitle !== "" && this.errorMessage !== "";
    },
  },
  methods: {
    addValidItem() {
      if (this.enteredResource.title.trim() === "") {
        this.errorTitle = "Invalid title";
        this.errorMessage =
          "Please enter at least a few characters for the title";
      } else if (this.enteredResource.description.trim() === "") {
        this.errorTitle = "Invalid description";
        this.errorMessage =
          "Please enter at least a few characters for the description";
      } else if (this.enteredResource.link.trim() === "") {
        this.errorTitle = "Invalid link";
        this.errorMessage =
          "Please enter at least a few characters for the link";
      } else {
        this.addItem(this.enteredResource);
      }
    },
    resetError() {
      console.log("reset");
      this.errorTitle = "";
      this.errorMessage = "";
    }
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
