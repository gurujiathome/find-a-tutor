import React, {Component} from 'react';
import {Container, Icon, Text, Button, Content} from 'native-base';
import {login, selectMode} from '../actions/settings';
import {connect} from 'react-redux';

const LoginPageContentNoStore = ({onClick}) => {
    return (
        <Content padder>
            <Text>
                Witaj xD
            </Text>
            <Button onPress={() => onClick()} primary>
                <Icon name="facebook-f"/>
                <Text>Zaloguj się przez Facebooka</Text>
            </Button>
        </Content>
    );
};

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
        return (<Container><LoginPageContent/></Container>);
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(login());
            dispatch(selectMode('student'));
        }
    }
};

const LoginPageContent = connect(null, mapDispatchToProps)(LoginPageContentNoStore);

const mapStateToProps = state => {
    return {
        mode: state.settings.mode,
        isAuthenticated: Boolean(state.settings.user.name)
    };
};
const LoginPage = connect(mapStateToProps)(LoginPageContainer);
export default LoginPage;