import {AuthService} from '../services/AuthService';
import {AccessToken, GraphRequest, GraphRequestManager, LoginManager} from 'react-native-fbsdk';

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

export function loginSuccess(userData) {
    return {
        type: 'LOGIN_SUCCESS',
        userData
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
                    result => dispatch(loginSuccess(result)),
                    error => dispatch(loginFailed(error))
                );
        });

        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then(result => !result.isCancelled && new GraphRequestManager().addRequest(request).start());
    }
}