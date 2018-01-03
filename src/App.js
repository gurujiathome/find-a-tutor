import React, {Component} from 'react'
import {BackHandler, Platform} from 'react-native'
import {connect, Provider} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'
import {DefaultNavigator} from './navigation'
import {StyleProvider} from 'native-base'
import platform from '../native-base-theme/variables/platform'
import getTheme from '../native-base-theme/components'
import store from './store'

// https://stackoverflow.com/questions/42876690/react-navigation-with-login-screen
// god bless this guy
class App extends Component {
    // componentWillMount() {
    //     if (Platform.OS !== 'android') return;
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         const {dispatch} = this.props;
    //         dispatch({ type: 'Navigation/BACK' });
    //         return true;
    //     })
    // }
    //
    // componentWillUnmount() {
    //     if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress')
    // }

    render() {
        const {dispatch, nav} = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav
        });

        return (
            <StyleProvider style={getTheme(platform)}>
                <DefaultNavigator navigation={navigation} />
            </StyleProvider>
        );
    }
}

const mapStateToProps = ({nav}) => ({nav});
const RootNavigationStack = connect(mapStateToProps)(App);

const Root = () => (
    <Provider store={store}>
        <RootNavigationStack />
    </Provider>
);

export default Root;