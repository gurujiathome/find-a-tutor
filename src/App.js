import React, {Component} from 'react';
import RootNavigator from './navigators/RootNavigator';
import {StyleProvider} from 'native-base';
import platform from '../native-base-theme/variables/platform';
import getTheme from '../native-base-theme/components';

export default class App extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <RootNavigator />
            </StyleProvider>
        );
    }
}