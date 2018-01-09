import React, {Component} from 'react';
import {
    Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Text, Thumbnail,
    Title
} from 'native-base';
import {logout, removeAccount} from '../actions/settings';
import {Alert, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

export class SettingsScreen extends Component {
    handleLogout() {
        Alert.alert(
            'Wyloguj',
            'Czy na pewno chcesz się wylogować?',
            [
                {text: 'Nie', style: 'cancel'},
                {text: 'Tak', onPress: () => {
                        AsyncStorage.removeItem('@findatutor:auth-token');
                        this.props.dispatch(logout());
                    }},
            ]
        );
    }

    handleAccountRemoval() {
        Alert.alert(
            'Usuń konto',
            'Czy na pewno chcesz usunąć konto? Wszystkie dane na temat Twojego konta na Facebooka oraz wszystkie ' +
            'kursy, których jesteś autorem zostaną usunięte.',
            [
                {text: 'Nie', style: 'cancel'},
                {text: 'Tak', onPress: () => {
                        AsyncStorage.removeItem('@findatutor:auth-token');
                        this.props.dispatch(removeAccount(this.props.user.token, this.props.user._id));
                    }},
            ]
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: this.props.user.picture}} />
                                <Body>
                                    <Text>Jesteś zalogowany jako: {this.props.user.fullName}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody style={{flex: 1, justifyContent: 'space-between'}}>
                            <Button onPress={() => this.handleLogout()} primary>
                                <Text>Wyloguj się</Text>
                            </Button>
                            <Button onPress={() => this.handleAccountRemoval()} danger>
                                <Text>Usuń konto</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

SettingsScreen.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Ustawienia</Title>
            </Body>
            <Right />
        </Header>
    )
});

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const Settings = connect(mapStateToProps)(SettingsScreen);
export default Settings;