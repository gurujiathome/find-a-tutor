import {combineReducers} from 'redux';

function user(state = {
    name: null,
    picture: null
}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return kupa = {
                name: action.userData.id
            };
        case 'LOGIN_FAIL':
            console.log(action.error);
            return state;
        default:
            return state;
    }
}

function mode(state = 'login', action) {
    if (action.type === 'SELECT_MODE') {
        return action.mode;
    } else {
        return state;
    }
}

export default combineReducers({
    user,
    mode
});