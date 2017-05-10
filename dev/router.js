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
        meta: {
            requireAuth: true,
        },
        component: UserInfo,
    },
];

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes,
});

// if (window.localStorage.getItem('token')) {
//     this.$store.commit('login', window.localStorage.getItem('token'));
// }
//
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//         if (this.$store.state.token) {
//             next();
//         } else {
//             next({
//                 path: '/',
//                 query: {
//                     redirect: to.fullPath,
//                 },
//             });
//         }
//     } else {
//         next();
//     }
// });

export default router;
