const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastname: '',
        };
    },
    // This solution isn't optimal since we have to duplicate code
    // if a value depends on multiple attributes. In this example fullname
    // depends on name and fullname, so it's better to leverage computed properties
    // for this use case.
    //
    // watch: {
    //     name(value) {
    //         if (value === "" || this.lastname === "") {
    //             this.fullname = "";
    //         } else {
    //             this.fullname = value + " " + this.lastname;
    //         }
    //     },
    //
    //     lastname(value) {
    //         if (this.name === "" || value === "") {
    //             this.fullname = "";
    //         } else {
    //             this.fullname = this.name + " " + this.lastname;
    //         }
    //     }
    //
    // },
    // Watches are better in changing the state of one attribute if necessary
    watch: {
      counter(value) {
          if(value > 50) {
              this.counter = 0;
          }
          if (value < 0) {
              this.counter = 0;
          }
      }
    },
    computed: {
        fullname() {
            if(this.name === "" || this.lastname === "") {
                return "";
            }
            return this.name + " " + this.lastname;
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = "";
            this.lastname = "";
        }
    }
});

app.mount('#events');
