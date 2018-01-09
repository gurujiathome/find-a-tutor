export default function user(state = {token: null, fbId: null}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            let userData = action.userData;
            userData.token = action.userToken;
            return userData;
        case 'LOGIN_FAIL':
            console.log(action.error);
            return Object.assign({}, state, {error: action.error});
        case 'LOGIN_LOGOUT':
        case 'ACCOUNT_REMOVED':
            return {token: null, fbId: null};
        default:
            return state;
    }
}