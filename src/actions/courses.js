import {CoursesService} from '../services/CoursesService';

export function getCoursesInit() {
    return {
        type: 'GET_COURSES_INIT'
    }
}

export function getCoursesSuccess(data) {
    return {
        type: 'GET_COURSES_SUCCESS',
        data
    }
}

export function getCoursesFail(data) {
    return {
        type: 'GET_COURSES_FAIL',
        message
    }
}

export function getCourses() {
    return function (dispatch) {
        dispatch(getCoursesInit());

        CoursesService.getCourses()
            .then(response => dispatch(getCoursesSuccess(response)));
    }
}