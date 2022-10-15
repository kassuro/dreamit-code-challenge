import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from '@/App.vue';
import router from '@/router';
import '@/assets/css/main.css';
import { apolloClient } from '@/apolloClient';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');
