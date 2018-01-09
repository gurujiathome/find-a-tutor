import {combineReducers} from 'redux';
import nav from './reducers/nav';
import user from './reducers/user';
import {courses} from './reducers/courses';
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    nav,
    user,
    courses,
    form: formReducer
});
