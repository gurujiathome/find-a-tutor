import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Courses} from '../screens/Courses';
import {Settings} from '../screens/Settings';
import {AddCourse} from '../screens/AddCourse';
import {Button, Footer, FooterTab, Icon, Text} from 'native-base';

const RootNavigator = TabNavigator({
    Courses: {
        screen: Courses
    },
    AddCourse: {
        screen: AddCourse
    },
    Settings: {
        screen: Settings
    }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        vertical
                        active={props.navigationState.index === 0}
                        onPress={() => props.navigation.navigate('Courses')}>
                        <Icon name="book" />
                        <Text>Kursy</Text>
                    </Button>
                    <Button
                        vertical
                        active={props.navigationState.index === 1}
                        onPress={() => props.navigation.navigate('AddCourse')}>
                        <Icon name="plus" />
                        <Text>Dodaj kurs</Text>
                    </Button>
                    <Button
                        vertical
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate('Settings')}>
                        <Icon name="cogs" />
                        <Text>Ustawienia</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

export default RootNavigator;