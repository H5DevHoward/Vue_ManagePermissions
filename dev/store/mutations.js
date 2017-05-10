import types from './mutation-types';

export default {
    [types.INCREMENT] (state) {
        state.count += 1;
    },
    [types.DECREMENT] (state) {
        state.count -= 1;
    },
    [types.SETUSER] (state, payload) {
        state.system.username = payload.username;
        state.system.password = payload.password;
        state.system.isAdmin = payload.isAdmin;
    },
};
