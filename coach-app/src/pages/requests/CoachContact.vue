<template>
  <form @submit.prevent="submitMessage">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <div class="actions">
      <base-button>Submit</base-button>
    </div>
    <p v-if="!formIsValid" class="errors">
      The input is invalid! Please check if you entered a correct e-mail and
      whether the message isn't empty.
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitMessage() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const request = {
        id: this.$route.params.id,
        email: this.email,
        message: this.message,
      };
      console.log("[From: " + this.email + "] Submit message: " + this.message);
      this.$store.dispatch("requests/addRequest", request);
      console.log("stored request:");
      console.log(this.$store.getters["requests/requests"]);
      this.$router.replace("/coaches");
    },
    validateForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
