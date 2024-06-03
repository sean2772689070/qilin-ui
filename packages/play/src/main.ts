import { createApp } from 'vue';
import App from './App.vue';
import QiLin from 'qilin-ui';
import 'qilin-ui/dist/index.css';

const app = createApp(App);

app.use(QiLin).mount('#app');
