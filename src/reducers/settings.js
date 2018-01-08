import {combineReducers} from 'redux';

function user(state = {token: null, fbId: null}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            let userData = action.userData;
            userData.token = action.userToken;
            return userData;
        case 'LOGIN_FAIL':
            console.log(action.error);
            return state;
        case 'LOGIN_LOGOUT':
            return {token: null, fbId: null};
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