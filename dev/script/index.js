import 'babel-polyfill';
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import router from '../router';
import store from '../store';
import App from '../component/App.vue';

Vue.use(ElementUI);

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#root');
