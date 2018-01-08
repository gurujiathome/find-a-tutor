export function courses(state = [], action) {
    switch(action.type) {
        case 'GET_COURSES_SUCCESS':
            return action.data;
        case 'GET_COURSES_FAIL':
            console.log(action.message);
            return state;
        default:
            return state;
    }
}