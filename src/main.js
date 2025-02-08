import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vco from 'click-outside-vue3';

createApp(App).use(router).use(vco).mount('#app');
