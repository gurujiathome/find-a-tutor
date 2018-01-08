import {serverUri} from '../App';

class CoursesServiceClass {
    getCourses(filter) {
        return fetch(serverUri + 'courses', {
            method: 'GET'
        }).then(response => response.json())
    }

    addCourse(properties) {
        return fetch(serverUri + 'courses', {
            method: 'POST',
            body: JSON.stringify(properties)
        }).then(response => response.json())
    }

    editCourse(id, properties) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'PUT',
            body: JSON.stringify(properties)
        }).then(response => response.json())
    }

    getCourse(id) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'GET',
        }).then(response => response.json())
    }

    deleteCourse(id) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'DELETE',
        }).then(response => response.json())
    }
}

export let CoursesService = new CoursesServiceClass();