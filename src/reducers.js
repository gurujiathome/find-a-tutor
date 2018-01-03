import {combineReducers} from 'redux'
import nav from './reducers/nav';
import settings from './reducers/settings';

export default combineReducers({
    nav,
    settings
});
