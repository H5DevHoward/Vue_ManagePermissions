import axios from 'axios';
import store from './store';
import router from './router';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }

        return config;
    },
    err => Promise.reject(err)
);

axios.interceptors.request.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit('LOGOUT');
                    router.replace({
                        path: '/',
                        query: {
                            redirect: router.currentRoute.fullPath,
                        },
                    });
                    break;
                default:

            }
        }

        return Promise.reject(error.response.data);
    }
);

export default axios;
