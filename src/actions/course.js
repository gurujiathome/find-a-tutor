import {CoursesService} from '../services/CoursesService';
import {getCourses} from './courses';

export function getCourseSuccess(data) {
    return {
        type: 'GET_COURSE_SUCCESS',
        data
    }
}

export function leaveCoursePage() {
    return {
        type: 'COURSE_LEAVE'
    }
}

export function getCourse(id) {
    return function (dispatch) {
        CoursesService.getCourse(id)
            .then(data => dispatch(getCourseSuccess(data)))
    }
}

export function removeCourse(id) {
    return function (dispatch) {
        CoursesService.deleteCourse(id)
            .then(() => {
                dispatch(getCourses());
                dispatch(leaveCoursePage())
            });
    }
}