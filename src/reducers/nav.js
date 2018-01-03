import {NavigationActions} from 'react-navigation';
import {DefaultNavigator} from '../navigation';

const INITIAL_STATE = DefaultNavigator.router.getStateForAction(NavigationActions.init());

export default (state = INITIAL_STATE, action) => {
    const nextState = DefaultNavigator.router.getStateForAction(action, state);
    return nextState || state
}
