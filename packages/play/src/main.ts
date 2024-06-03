import { createApp } from 'vue';
import App from './App.vue';
import QiLin from 'qilin-ui';

const app = createApp(App);

app.use(QiLin).mount('#app');
