import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {AsyncStorage} from 'react-native';
import {authenticateUser} from '../actions/settings';
import {connect} from 'react-redux';

class SplashScreenClass extends Component {
    componentWillMount() {
        setTimeout(() => {
            AsyncStorage.getItem('@findatutor:auth-token')
                .then(token => token ?
                    this.props.dispatch(authenticateUser(token)) :
                    this.props.navigation.navigate('LoginPage'))
        });
    }

    componentWillReceiveProps(nextProps) {
        let path;

        if (nextProps.loginFailed) {
            path = 'LoginPage';
        } else {
            path = nextProps.isAuthenticated ? 'MainApp' : 'LoginPage';
        }
        this.props.navigation.navigate(path);
    }

    render() {
        return (<Container><Content style={{backgroundColor: '#fff'}}/></Container>);
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: Boolean(state.user.token && state.user.fbId),
        loginFailed: Boolean(state.user.error)
    };
};

const SplashScreen = connect(mapStateToProps)(SplashScreenClass);
export default SplashScreen;