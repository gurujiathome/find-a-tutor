import React, {Component} from 'react';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    H3,
    Header,
    Icon,
    Left,
    Right,
    Text,
    Thumbnail,
    Title
} from 'native-base';
import {connect} from 'react-redux';
import {getCourse, leaveCoursePage, removeCourse} from '../actions/course';
import {Alert} from 'react-native';

class CourseScreen extends Component {
    constructor() {
        super();
        this.state = {
            weekdays: ''
        };
    }

    componentWillMount() {
        this.props.dispatch(getCourse(this.props.navigation.state.params.id));
    }

    componentWillReceiveProps(newProps) {
        if (newProps.course && newProps.course.days) {
            this.setWeekdays(newProps.course.days);
        }
    }

    setWeekdays(days) {
        let {mon, tue, wed, thu, fri, sat, sun} = days;
        let daysPl = [];

        if (mon) daysPl.push('poniedziałki');
        if (tue) daysPl.push('wtorki');
        if (wed) daysPl.push('środy');
        if (thu) daysPl.push('czwartki');
        if (fri) daysPl.push('piątki');
        if (sat) daysPl.push('soboty');
        if (sun) daysPl.push('niedziele');

        this.setState({weekdays: daysPl.join(', ')});
    }

    removeCourse() {
        Alert.alert(
            'Usunięcie kursu',
            'Czy na pewno chcesz usunąć kurs?',
            [
                {text: 'Nie', style: 'cancel'},
                {
                    text: 'Tak', onPress: () => {
                        this.props.dispatch(removeCourse(this.props.course._id));
                        this.props.navigation.goBack();
                    }
                }
            ]
        );
    }

    render() {
        console.log(this.props);
        const {course} = this.props;

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Left><H3 style={{paddingBottom: 16}}>{course.title}</H3></Left>
                            <Right>
                                <Thumbnail source={{uri: course.picture}}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Text>{course.description + '\n'}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontWeight: 'bold'}}>Cena: </Text>
                            <Text>{course.price} zł</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontWeight: 'bold'}}>Lekcje dostępne w: </Text>
                            <Text>{this.state.weekdays}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontWeight: 'bold'}}>Dodane przez: </Text>
                            <Text>{course.fullName}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

CourseScreen.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => {
                    setTimeout(() => navigation.dispatch(leaveCoursePage()), 1000);
                    navigation.goBack();
                }}>
                    <Icon name="arrow-back"/>
                </Button>
            </Left>
            <Body>
            <Title>Kurs</Title>
            </Body>
            <Right />
        </Header>
    )
});

const mapStateToProps = state => {
    return {
        course: state.course,
        user: state.user
    };
};

const Course = connect(mapStateToProps)(CourseScreen);
export default Course;