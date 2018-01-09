import React, {Component} from 'react';
import {Body, Button, Container, Content, Form, Header, Icon, Input, Item, Left, Right, Title} from 'native-base';
import {reduxForm} from 'redux-form';

export class AddCourseScreen extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#fff'}}>
                    <Form>
                        <Item>
                            <Input placeholder="Tytuł" />
                        </Item>
                        <Item>
                            <Input placeholder="Kategoria" />
                        </Item>
                        <Item>
                            <Input keyboardType={"numeric"} placeholder="Cena" />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

AddCourseScreen.navigationOptions = ({navigation}) => ({
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

export default reduxForm({
    form: 'Form'
})(AddCourseScreen);