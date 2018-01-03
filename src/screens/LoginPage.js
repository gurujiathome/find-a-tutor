import React from 'react';
import {Container, Icon, Text, Button, Content} from 'native-base';
import {login, selectMode} from '../actions/settings';
import {connect} from 'react-redux';

const LoginPageContainer = ({onClick}) => {
    return (
        <Container>
            <Content padder>
                <Text>
                    Witaj xD
                </Text>
                <Button onPress={() => onClick()} primary>
                    <Icon name="facebook-f"/>
                    <Text>Zaloguj się przez Facebooka</Text>
                </Button>
            </Content>
        </Container>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(login());
            dispatch(selectMode('student'));
        }
    }
};

const LoginPage = connect(null, mapDispatchToProps)(LoginPageContainer);
export default LoginPage;