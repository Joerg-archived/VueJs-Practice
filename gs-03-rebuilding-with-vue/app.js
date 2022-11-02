Vue.createApp({
    data() {
        return {
          goals: [],
          enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount("#app"); // to let vue know where it should render vue stuff

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
//
// buttonEl.addEventListener('click', function () {
//    const enteredValue = inputEl.value;
//    const listItemEl = document.createElement('li');
//    listItemEl.textContent = enteredValue;
//    listEl.appendChild(listItemEl);
//    inputEl.value = "";
// });

