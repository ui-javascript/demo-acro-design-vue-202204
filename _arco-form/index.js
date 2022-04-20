import { createApp } from 'vue'
import App from './index.vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import formCreate from '@form-create/arco-design'

const app = createApp(App);
app.use(ArcoVue, {
    // 组件前缀
    // componentPrefix: ''
});

app.use(formCreate);

app.mount('#app');

