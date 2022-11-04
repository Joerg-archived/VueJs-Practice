const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return "Not there yet"
            }
            if (this.counter > 37) {
                return "Too much!";
            }

            return this.counter;
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        }
    },

    watch: {
        result() {
            let that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000);
        }
    }
});

app.mount("#assignment")