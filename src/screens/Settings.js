import React, {Component} from 'react';
import {
    Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Text, Thumbnail,
    Title, View
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
                {
                    text: 'Tak', onPress: () => {
                        AsyncStorage.removeItem('@findatutor:auth-token');
                        this.props.dispatch(logout());
                    }
                },
            ]
        );
    }

    handleAccountRemoval() {
        Alert.alert(
            'Usuń konto',
            'Czy na pewno chcesz usunąć konto? Wszystkie dane na temat Twojego konta oraz wszystkie kursy, ' +
            'których jesteś autorem zostaną usunięte.',
            [
                {text: 'Nie', style: 'cancel'},
                {
                    text: 'Tak', onPress: () => {
                        AsyncStorage.removeItem('@findatutor:auth-token');
                        this.props.dispatch(removeAccount(this.props.user.token, this.props.user._id));
                    }
                },
            ]
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem style={{marginBottom: 10}}>
                            <Left>
                                <Thumbnail source={{uri: this.props.user.picture}}/>
                                <Body>
                                    <Text>Jesteś zalogowany jako: {'\n'}{this.props.user.fullName}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody style={{flex: 1, flexDirection: 'column'}}>
                            <Button onPress={() => this.handleLogout()} primary full>
                                <Text>Wyloguj się</Text>
                            </Button>
                            <Button onPress={() => this.handleAccountRemoval()} danger full>
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
                    <Icon name="arrow-back"/>
                </Button>
            </Left>
            <Body>
            <Title>Ustawienia</Title>
            </Body>
            <Right/>
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