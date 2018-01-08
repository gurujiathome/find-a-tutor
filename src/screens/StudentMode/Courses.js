import React, {Component} from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';
import {CourseListElement} from '../../components/CourseListElement';
import {connect} from 'react-redux';
import {getCourses} from '../../actions/courses';
import {Alert, AsyncStorage} from 'react-native';
import {logout} from '../../actions/settings';

class CoursesScreen extends Component {
    componentWillMount() {
        this.props.dispatch(getCourses())
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#fff'}}>
                    {this.props.courses.map(course => <CourseListElement key={course._id} course={course} />)}
                </Content>
            </Container>
        );
    }
}

CoursesScreen.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
                    <Icon name="filter" />
                </Button>
            </Left>
            <Body>
                <Title>Dostępne kursy</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => navigation.dispatch(getCourses())}>
                    <Icon name="refresh" />
                </Button>
                <Button transparent onPress={() => handleLogout(navigation)}>
                    <Icon name="sign-out" />
                </Button>
            </Right>
        </Header>
    )
});

function handleLogout(navigation) {
    Alert.alert(
        'Wyloguj',
        'Czy na pewno chcesz się wylogować?',
        [
            {text: 'Nie', style: 'cancel'},
            {text: 'Tak', onPress: () => {
                AsyncStorage.removeItem('@findatutor:auth-token');
                navigation.dispatch(logout());
                navigation.navigate('SplashScreen');
            }},
        ]
    );
}

const mapStateToProps = state => {
    return {
        courses: state.courses
    };
};

const Courses = connect(mapStateToProps)(CoursesScreen);
export default Courses;