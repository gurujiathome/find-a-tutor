import React, {Component} from 'react';
import {Container, Text} from 'native-base';

export class LoginPage extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        By móc korzystać z tej funkcjonalności, trzeba się zalogować.{'\n'}
                    </Text>
                    <FacebookLoginButton />
                </Content>
            </Container>
        )
    }
}