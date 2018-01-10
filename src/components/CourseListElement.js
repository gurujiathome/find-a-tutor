import React, {Component} from 'react';
import {Container, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export class CourseListElement extends Component {
    render() {
        return (
            <ListItem onPress={() => this.props.onPress()} avatar>
                <Left>
                    <Thumbnail source={{uri: this.props.course.user.picture}}/>
                </Left>
                <Body>
                <Text numberOfLines={1}>{this.props.course.title}</Text>
                <Text numberOfLines={1} note>{this.props.course.category}, {this.props.course.price} zł</Text>
                </Body>
                <Right>
                    <Text note>{this.props.course.distance}</Text>
                </Right>
            </ListItem>
        );
    }
}