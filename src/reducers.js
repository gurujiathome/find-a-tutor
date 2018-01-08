import {combineReducers} from 'redux';
import nav from './reducers/nav';
import settings from './reducers/settings';
import {courses} from './reducers/courses';

export default combineReducers({
    nav,
    settings,
    courses
});
