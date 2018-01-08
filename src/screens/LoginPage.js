import React, {Component} from 'react';
import {Container, Content, Text, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {login, selectMode} from '../actions/settings';

class LoginPageContainer extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            if (nextProps.mode === 'student') {
                this.props.navigation.navigate('StudentMode')
            } else if (nextProps.mode === 'tutor') {
                this.props.navigation.navigate('TutorMode')
            }
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        Witaj xD
                    </Text>
                    <Button onPress={() => {
                        this.props.dispatch(login());
                        this.props.dispatch(selectMode('student'));
                    }} primary>
                        <Icon name="facebook-f"/>
                        <Text>Zaloguj się przez Facebooka</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        mode: state.settings.mode,
        isAuthenticated: Boolean(state.settings.user.token && state.settings.user.fbId)
    };
};
const LoginPage = connect(mapStateToProps)(LoginPageContainer);

export default LoginPage;