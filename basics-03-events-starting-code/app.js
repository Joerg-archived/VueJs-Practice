const app = Vue.createApp({
  data() {
    return {
      counter: 15,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    incrementResult(num) {
      this.counter = this.counter + num;
    },
    decrementResult(num) {
      if (this.counter - num <= 0){
        this.counter = 0;
      } else {
        this.counter = this.counter - num;
      }
    },
    setName(event) {
      this.name = event.target.value;
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted!");
    }

  },

});

app.mount('#events');
