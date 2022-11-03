const app = Vue.createApp({
    // vue stores data values in a global object where it keeps track of updates, etc.
    // vue does that by using the proxy pattern as a wrapper of these attributes
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
            // console.log("input");
        },
        setText() {
            this.message = this.$refs.userText.value;
            // console.dir(this.$refs.userText);
        },
    },
    /*
    ----------------------------------------------------------------------------
    --                            VUE LIFECYCLE                               --
    ----------------------------------------------------------------------------
    createApp
        |
        V
    beforeCreate
        |
        V
    created ––––––––- # Vue knows data properties and app configurations
        |           |
        |           V
        |       Compile # Placeholders are replaced
        |       template
        |           |                         updated             unmounted
        |           |                           ^                   ^
        V           |                           |                   |
    beforeMount <----                      beforeUpdate       beforeUnmount
        |                                       ^                   ^
        V                                       |                   |
    mounted --> Mounted vue instance --> Data changed       Instance unmounted
                (i.e. we see something)                             ^
                        |                                           |
                        |-------------------------------------------|
     */
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("before mount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("before update");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("before unmount");
    },
    unmounted() {
        console.log("unmounted");
    }

});

app.mount('#app');

// setTimeout(function() {
//     app.unmount();
// }, 5000);

/*
Completely independent of app, i.e. accessing e.g. message is not possible
from here. If multiple apps depends on each other, you should consider
merging both apps
 */
const app2 = Vue.createApp({
// We can use template to replace the "html part" in the defined vue section
    template: `
<p>{{ favoriteMeal }}++</p>
`
    ,
    data() {
        return {
            favoriteMeal: "Pizza",
        }
    }
});

app2.mount("#app2")

/*
Proxy in vue works reactively like this: It implements handler
that keeps track of changes of attributes and updates other attributes
that are dependant from this.
 */
const data = {
    message: 'Hello!',
    longMessage: 'Hello! World!'
}

const handler = {
    set(target, key, value) {
        if (key === 'message') {
            target.message = value;
            target.longMessage = value + " World!";
        }
    }
}

const proxy = new Proxy(data, handler);
console.debug(proxy.longMessage);
proxy.message = "Hello!!!";
console.debug(proxy.longMessage);
