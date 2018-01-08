import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {AsyncStorage} from 'react-native';

export class SplashScreen extends Component {
    componentWillMount() {
        setTimeout(() => {
            AsyncStorage.getItem('@findatutor:auth-token')
                .then(token => {
                    let path = token ? 'StudentMode' : 'LoginPage';
                    this.props.navigation.navigate(path);
                })
        });
    }

    render() {
        return (<Container><Content style={{backgroundColor: '#fff'}} /></Container>);
    }
}