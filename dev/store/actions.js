import types from './mutation-types';

export default {
    increment: ({commit}) => {
        commit(types.INCREMENT);
    },
    decrement: ({commit}) => {
        commit(types.DECREMENT);
    },
    login: ({commit}, payload) => {
        commit(types.SETUSERNAME, payload.username);
        commit(types.SETPASSWORD, payload.password);
    },
};
