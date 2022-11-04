const app = Vue.createApp({
    data() {
        return {
            output: "",
            confirmedOutput: "",
        }
    },
    methods: {
        showAlert(text) {
            alert(text);
        },
        printInputInParagraph(event) {
            this.output = event.target.value;
        },
        printConfirmedInputInParagraph(event) {
            this.confirmedOutput = event.target.value;
        }
    }

});

app.mount("#assignment")