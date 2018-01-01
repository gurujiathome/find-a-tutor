import {combineReducers} from 'redux'
import navReducer from './reducers/navReducer';

export default combineReducers({
    nav: navReducer
});
