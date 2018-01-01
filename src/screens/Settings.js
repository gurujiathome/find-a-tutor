import React, {Component} from 'react';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import {FacebookLoginButton} from '../components/FacebookLoginButton';

export class Settings extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <FacebookLoginButton />
                </Content>
            </Container>
        );
    }
}