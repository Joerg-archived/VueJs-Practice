import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// These assignments are global which is not always required
// Sometimes we want to assign components locally
// app.component('the-header', TheHeader);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
