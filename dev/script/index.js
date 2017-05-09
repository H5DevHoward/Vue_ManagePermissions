import 'babel-polyfill';
import Vue from 'vue';
import router from '../router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './components/App.vue';

Vue.use(ElementUI);

const app = new Vue({
    router,
    components: {
        App,
    },
}).$mount('#root');
