import Vue from 'vue';
import VueRouter from 'vue-router';

const SignInComponent = resolve => require(['./component/SignInComponent.vue'], resolve);
const UserInfo = resolve => require(['./component/UserInfo.vue'], resolve);

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: SignInComponent,
    },
    {
        path: '/info',
        name: 'information',
        component: UserInfo,
    },
];

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes,
});

export default router;
