import {AsyncStorage} from 'react-native';

class AuthServiceClass {
    saveAuthToken(fbAccessToken) {
        return fetch('http://192.168.0.13:3000/api/auth/facebook', {
            method: 'POST',
            headers: {
                access_token: fbAccessToken
            }
        })
            .then(response => {
                let token = response.headers.get('x-auth-token');
                token && AsyncStorage.setItem('@findatutor:auth-token', token);
                return response.json();
            })
    }
}

export let AuthService = new AuthServiceClass();