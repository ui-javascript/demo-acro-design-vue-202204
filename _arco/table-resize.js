import { createApp } from 'vue'
import App from './table-resize.vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue, {
    // 组件前缀
    componentPrefix: ''
});

app.mount('#app');

