const app = Vue.createApp({
    data() {
        return {
            paragraphClassEntered: '',
            paragraphShown: true,
            paragraphBackgroundColor: ''
        }
    },

    computed: {
        pClass() {
            if(this.paragraphClassEntered === "user1") {
                return {user1: true};
            }
            if(this.paragraphClassEntered === "user2") {
                return {user2: true};
            }

            return {};
        },

        pInlineClass() {
            if (this.paragraphShown) {
                return {visible: true, hidden: false};
            } else {
                return {visible: false, hidden: true};
            }
        },
        pInlineStyle() {
            return {backgroundColor: this.paragraphBackgroundColor}
        }

    },
    methods: {
        toggleParagraph() {
            this.paragraphShown = !this.paragraphShown;
        }
    }
});

app.mount("#assignment")