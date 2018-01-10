import React, {Component} from 'react';
import {
    Body, Button, Card, CardItem, CheckBox, Container, Content, Form, H2, H3, Header, Icon, Input, Item, Left, ListItem,
    Picker, Right, Text, Title, View
} from 'native-base';
import Modal from 'react-native-modal';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {CoursesService} from '../services/CoursesService';
import {getCourses} from '../actions/courses';

export class AddCourse extends Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            title: '',
            category: '',
            description: '',
            price: '',
            phone: '',
            daysPicked: 'Wybierz dni tygodnia'
        }
    }

    setCheckbox(day) {
        this.state[day] ? this.setState({[day]: false}) : this.setState({[day]: true});
    }

    setPrice(inputValue) {
       inputValue = Math.abs(parseInt(inputValue.price));
       this.setState({price: inputValue})
    }

    displayDays() {
        let {mon, tue, wed, thu, fri, sat, sun} = this.state;
        let daysPl = [];

        if (mon) daysPl.push('pon');
        if (tue) daysPl.push('wt');
        if (wed) daysPl.push('śr');
        if (thu) daysPl.push('czw');
        if (fri) daysPl.push('pt');
        if (sat) daysPl.push('sob');
        if (sun) daysPl.push('nie');

        if (daysPl.length) {
            let daysPicked = daysPl.join(', ');
            this.setState({daysPicked});
        } else {
            this.setState({daysPicked: 'Wybierz dni tygodnia'});
        }
    }

    onModalClose() {
        this.displayDays();
        this.setState({modalVisible: false});
    }

    sendForm() {
        let formData = _.pick(this.state, ['title', 'category', 'description', 'price', 'phone']);
        let days = _.pick(this.state, ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);

        formData.user = this.props.user._id;

        if (_.some(_.values(days), Boolean) && _.every(formData, value => value)) {
            CoursesService.addCourse(Object.assign({}, formData, {days}));
            this.props.dispatch(getCourses());
            this.props.navigation.navigate('Courses');
        } else {
            Alert.alert(
                'Błąd',
                'Wszystkie pola formularza są wymagane!',
            );
        }
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#fff'}}>
                    <Form>
                        <Item>
                            <Input name="title" placeholder="Tytuł"
                                   onChangeText={(title) => this.setState({title})}/>
                        </Item>
                        <Item>
                            <Input name="category" placeholder="Kategoria"
                                   onChangeText={(category) => this.setState({category})}/>
                        </Item>
                        <Item>
                            <Input multiline={true} maxLength={1000} maxHeight={200}
                                   onChangeText={(description) => this.setState({description})}
                                   name="description" returnKeyType={'go'} placeholder="Opis"/>
                        </Item>
                        <Item>
                            <Input name="price" keyboardType={'numeric'} maxLength={3}
                                   onChangeText={(price) => this.setPrice({price})}
                                   placeholder="Cena za godzinę w PLN"/>
                        </Item>
                        <Item>
                            <Input name="phone" keyboardType={'numeric'} placeholder="Numer telefonu"
                                   onChangeText={(phone) => this.setState({phone})}/>
                        </Item>
                        <Item onPress={() => this.setState({modalVisible: true})} last>
                            <Input name="weekdays" disabled placeholder={this.state.daysPicked}/>
                        </Item>
                        <Button primary full onPress={() => this.sendForm()}>
                            <Text>Wyślij</Text>
                        </Button>
                    </Form>
                </Content>
                <Modal isVisible={this.state.modalVisible}
                       onBackButtonPress={() => this.onModalClose()}
                       onBackdropPress={() => this.onModalClose()}
                       supportedOrientations={['portrait', 'landscape']}>
                    <Card style={{flex: 0}}>
                        <CardItem header>
                            <H3>Wybierz dni tygodnia</H3>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.mon} onPress={() => this.setCheckbox('mon')} />
                            <Left style={{paddingLeft: 15}}><Text>poniedziałek</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.tue} onPress={() => this.setCheckbox('tue')} />
                            <Left style={{paddingLeft: 15}}><Text>wtorek</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.wed} onPress={() => this.setCheckbox('wed')} />
                            <Left style={{paddingLeft: 15}}><Text>środa</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.thu} onPress={() => this.setCheckbox('thu')} />
                            <Left style={{paddingLeft: 15}}><Text>czwartek</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.fri} onPress={() => this.setCheckbox('fri')} />
                            <Left style={{paddingLeft: 15}}><Text>piątek</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.sat} onPress={() => this.setCheckbox('sat')} />
                            <Left style={{paddingLeft: 15}}><Text>sobota</Text></Left>
                        </CardItem>
                        <CardItem>
                            <CheckBox checked={this.state.sun} onPress={() => this.setCheckbox('sun')} />
                            <Left style={{paddingLeft: 15}}><Text>niedziela</Text></Left>
                        </CardItem>
                        <CardItem footer style={{justifyContent: 'center'}}>
                            <Button info transparent onPress={() => this.onModalClose()}>
                                <Text>OK</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Modal>
            </Container>
        );
    }
}

AddCourse.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back"/>
                </Button>
            </Left>
            <Body>
            <Title>Dodaj kurs</Title>
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

const connected = connect(mapStateToProps)(AddCourse);
export default connected;