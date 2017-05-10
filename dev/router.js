import Vue from 'vue';
import VueRouter from 'vue-router';

const SignInComponent = resolve => require(['./component/SignInComponent.vue'], resolve);
const UserInfo = resolve => require(['./component/UserInfo.vue'], resolve);

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: SignInComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/info',
        component: UserInfo,
        meta: {
            scrollToTop: true,
        },
    },
];

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes,
});

export default router;
