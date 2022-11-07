import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from "./components/base/BaseCard.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseAlert from "./components/base/BaseAlert.vue";

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-alert', BaseAlert);

app.mount('#app');
