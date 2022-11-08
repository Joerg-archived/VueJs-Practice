<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalid: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <!-- The blur event executes when an element lost its focus. -->
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateUserName"
      />
      <p v-if="userNameValidity === 'invalid'">Enter a valid username!</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: userAgeValidity === 'invalid' }"
    >
      <label for="age">Your Age (Years)</label>
      <!-- v-model automatically converts the value to the "type"-type
      whereas ref leaves the value unchanged (i.e a string).
      You can also use v-model.number="..." to for conversion if type is set to
      text, for example.
       -->
      <input
        id="age"
        name="age"
        type="number"
        v-model.trim="userAge"
        @blur="validateUserAge"
        ref="age"
      />
      <p v-if="userAgeValidity === 'invalid'">Enter a valid user age!</p>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <!-- We have to set values for each of the checkbox,
      otherwise vue can't differentiate the checkbox values from each other
       -->
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interests"
          value="news"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interests"
          value="tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interests"
          value="nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          v-model="how"
          value="video"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          v-model="how"
          value="blogs"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          v-model="how"
          value="other"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
    </div>
    <div class="form-control">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        v-model="agreeTerms"
        value="terms"
      />
      <label for="terms"> Agree terms of use? </label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl.vue";
export default {
  components: {
    RatingControl,
  },
  data() {
    return {
      userName: "",
      userAge: null,

      // option value in select element
      referrer: "wom",

      // array is obligatory, otherwise all checkboxes share the same state
      interests: [],
      how: null,
      agreeTerms: false,
      rating: null,

      // Validity attributes
      userNameValidity: "pending",
      userAgeValidity: "pending",
    };
  },
  methods: {
    submitForm() {
      console.log("Username: ");
      console.log(this.userName);
      this.userName = "";

      console.log("Userage: ");
      console.log(this.userAge);
      console.log(this.$refs.age.value);
      console.log(43);
      this.userAge = null;

      console.log("\n\nReferrer: ");
      console.log(this.referrer);
      this.referrer = "wom";

      console.log("\n\nInterests");
      console.log(this.interests);
      this.interests = [];

      console.log("\n\nHow:");
      console.log(this.how);
      this.how = null;

      console.log("\n\nAgree Terms:");
      console.log(this.agreeTerms);
      this.agreeTerms = false;

      console.log("\n\nRating: ");
      console.log(this.rating);
      this.rating = null;
    },
    validateUserName() {
      if (this.userName === "") {
        this.userNameValidity = "invalid";
      } else {
        this.userNameValidity = "valid";
      }
    },
    validateUserAge() {
      console.log("validate user age");
      // for numbers its better to use refs to avoid special case handling were
      // null is converted to 0
      if (this.$refs.age.value === "") {
        this.userAgeValidity = "invalid";
      } else {
        this.userAgeValidity = "valid";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>