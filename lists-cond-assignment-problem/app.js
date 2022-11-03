const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: "",
            showTasks: true,
        }
    },
    computed: {
      buttonCaption() {
          return this.showTasks ? "Hide List" : "Show List";
      }
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleTaskList() {
            this.showTasks = !this.showTasks;
        }
    }
});

app.mount("#assignment");