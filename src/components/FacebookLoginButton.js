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

        }
    }



    logout() {
        AsyncStorage.removeItem('@findatutor:auth-token')
            .then(() => this.setState(() => loggedOut));
    }

    render() {
        return (

        );
    }
}