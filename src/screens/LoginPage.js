import React, {Component} from 'react';
import {Container, Content, Text, Button, Icon, H3, H1} from 'native-base';
import {connect} from 'react-redux';
import {login, selectMode} from '../actions/settings';
import {StyleSheet} from 'react-native';

class LoginPageContainer extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <H1 style={styles.header}>Find A Tutor</H1>
                    <Text style={styles.text}>
                        Znajdź korepetytora w kilka chwil!
                    </Text>
                    <Button style={{alignSelf: 'center'}} onPress={() => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    header: {
        marginBottom: 50
    },
    text: {
        marginBottom: 25
    }
});

const mapStateToProps = state => {
    return {
        isAuthenticated: Boolean(state.user.token && state.user.fbId)
    };
};
const LoginPage = connect(mapStateToProps)(LoginPageContainer);

export default LoginPage;