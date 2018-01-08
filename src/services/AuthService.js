import {AsyncStorage} from 'react-native';
import {serverUri} from '../App';

class AuthServiceClass {
    saveAuthToken(fbAccessToken) {
        return fetch(serverUri + 'auth/facebook', {
            method: 'POST',
            headers: {
                access_token: fbAccessToken
            }
        })
            .then(response => {
                let token = response.headers.get('x-auth-token');
                token && AsyncStorage.setItem('@findatutor:auth-token', token);
                return token;
            })
    }
}

export let AuthService = new AuthServiceClass();