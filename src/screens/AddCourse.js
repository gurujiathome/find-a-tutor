import React, {Component} from 'react';
import {Container, Header, Title, Content, Icon, Button, Text} from 'native-base';
import {AsyncStorage} from 'react-native';
import LoginScreen from '../components/LoginScreen';
import * as _ from 'lodash';

export class AddCourse extends Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }

    componentDidMount() {
        AsyncStorage.getItem('@findatutor:auth-token')
            .then(isLogged => this.setState(() => ({isLoggedIn: !_.isNil(isLogged)})));
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <Container>
                    <Content padder>
                        <Text>Hi</Text>
                    </Content>
                </Container>
            );
        } else {
            return (<LoginScreen/>);
        }
    }
}