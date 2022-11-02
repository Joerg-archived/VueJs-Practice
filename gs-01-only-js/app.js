const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

buttonEl.addEventListener('click', function () {
   const enteredValue = inputEl.value;
   const listItemEl = document.createElement('li');
   listItemEl.textContent = enteredValue;
   listEl.appendChild(listItemEl);
   inputEl.value = "";
});