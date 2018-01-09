import React, {Component} from 'react';
import {Container, Content, Text, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {login, selectMode} from '../actions/settings';

class LoginPageContainer extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        Witaj xD
                    </Text>
                    <Button onPress={() => {
                        this.props.dispatch(login());
                    }} primary>
                        <Icon name="logo-facebook" />
                        <Text>Zaloguj się przez Facebooka</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: Boolean(state.user.token && state.user.fbId)
    };
};
const LoginPage = connect(mapStateToProps)(LoginPageContainer);

export default LoginPage;