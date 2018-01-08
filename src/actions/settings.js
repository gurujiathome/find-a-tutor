import {AuthService} from '../services/AuthService';
import {AccessToken, GraphRequest, GraphRequestManager, LoginManager} from 'react-native-fbsdk';
import {serverUri} from '../App';

export function selectMode(mode) {
    return {
        type: 'SELECT_MODE',
        mode
    }
}

export function loginInit() {
    return {
        type: 'LOGIN_INIT'
    }
}

export function loginFailed(error) {
    return {
        type: 'LOGIN_FAIL',
        error
    }
}

export function loginSuccess(userData, userToken) {
    console.log(userData, userToken);
    return {
        type: 'LOGIN_SUCCESS',
        userData,
        userToken
    }
}

export function logout() {
    return {
        type: 'LOGIN_LOGOUT'
    }
}

export function login() {
    return function (dispatch) {
        dispatch(loginInit());

        let request = new GraphRequest('/me', {
            httpMethod: 'GET',
            version: 'v2.5'
        }, () => {
            return AccessToken.getCurrentAccessToken()
                .then(data => data.accessToken.toString())
                .then(data => AuthService.saveAuthToken(data))
                .then(
                    token => dispatch(authenticateUser(token)),
                    error => dispatch(loginFailed(error))
                );
        });

        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then(result => !result.isCancelled && new GraphRequestManager().addRequest(request).start());
    }
}

export function authenticateUser(userToken) {
    console.log(userToken);
    return function (dispatch) {
        fetch(serverUri + 'auth/me', {
            method: 'GET',
            headers: {
                'x-auth-token': userToken
            }
        })
            .then(response => response.json(),
                error => dispatch(loginFailed(error)))
            .then(response => dispatch(loginSuccess(response, userToken)));
    }
}