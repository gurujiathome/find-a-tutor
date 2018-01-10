import {combineReducers} from 'redux';
import nav from './reducers/nav';
import user from './reducers/user';
import {courses} from './reducers/courses';
import {course} from './reducers/course';

export default combineReducers({
    nav,
    user,
    courses,
    course
});
