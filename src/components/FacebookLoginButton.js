import React, {Component} from 'react';
import {GraphRequest, LoginManager, GraphRequestManager, AccessToken} from 'react-native-fbsdk';
import {Button, Text} from 'native-base';
import {Alert, AsyncStorage} from 'react-native';

const loggedOut = {
    text: 'Zaloguj się przez Facebooka',
    isLogged: false
};

const loggedIn = {
    text: 'Wyloguj się',
    isLogged: true
};

export class FacebookLoginButton extends Component {
    constructor() {
        super();
        this.state = loggedOut;

        AsyncStorage.getItem('@findatutor:auth-token')
            .then(value => {
                if (value) {
                    this.setState(() => loggedIn)
                }
            })
    }

    handleFacebookLogin() {
        if (this.state.isLogged) {
            Alert.alert(
                'Wyloguj',
                'Czy na pewno chcesz się wylogować?',
                [
                    {text: 'Nie', style: 'cancel'},
                    {text: 'Tak', onPress: () => this.logout()},
                ]
            );
        } else {
            let request = new GraphRequest('/me', {
                httpMethod: 'GET',
                version: 'v2.5'
            }, () => {
                AccessToken.getCurrentAccessToken()
                    .then(data => data.accessToken.toString())
                    .then(data => this.saveAuthToken(data));
            });

            LoginManager.logInWithReadPermissions(['public_profile', 'email'])
                .then(
                    result => !result.isCancelled && new GraphRequestManager().addRequest(request).start(),
                    error => alert('Logowanie nie powiodło się: ' + error)
                );
        }
    }

    saveAuthToken(fbAccessToken) {
        fetch('http://192.168.2.101:3000/api/auth/facebook', {
            method: 'POST',
            headers: {
                access_token: fbAccessToken
            }
        })
            .then(response => {
                let token = response.headers.get('x-auth-token');
                if (token) {
                    AsyncStorage.setItem('@findatutor:auth-token', token)
                        .then(() => this.setState(() => loggedIn));
                }
            })
    }

    logout() {
        AsyncStorage.removeItem('@findatutor:auth-token')
            .then(() => this.setState(() => loggedOut));
    }

    render() {
        return (
            <Button onPress={() => this.handleFacebookLogin()} primary>
                <Text>{this.state.text}</Text>
            </Button>
        );
    }
}