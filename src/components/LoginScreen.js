import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {FacebookLoginButton} from './FacebookLoginButton';

export default class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        By móc korzystać z tej funkcjonalności, trzeba się zalogwać.{'\n'}
                    </Text>
                    <FacebookLoginButton />
                </Content>
            </Container>
        );
    }
}
