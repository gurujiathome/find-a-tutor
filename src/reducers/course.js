export function course(state = {}, action) {
    switch(action.type) {
        case 'GET_COURSE_SUCCESS':
            return action.data;
        case 'COURSE_LEAVE':
            return {};
        default:
            return state;
    }
}