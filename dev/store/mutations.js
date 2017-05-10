import types from './mutation-types';

export default {
    [types.INCREMENT] (state) {
        state.count += 1;
    },
    [types.DECREMENT] (state) {
        state.count -= 1;
    },
    [types.SETUSERNAME] (state, payload) {
        state.system.username = payload;
    },
    [types.SETPASSWORD] (state, payload) {
        state.system.password = payload;
    },
};
