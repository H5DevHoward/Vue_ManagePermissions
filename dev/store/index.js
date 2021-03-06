import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {},
    strict: process.env.NODE_ENV !== 'production',
});
