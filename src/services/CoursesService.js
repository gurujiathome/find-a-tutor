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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(properties)
        }).then(response => response.json())
    }

    editCourse(id, properties) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(properties)
        }).then(response => response.json())
    }

    getCourse(id) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(response => {
                let newCourse = Object.assign({}, response, response.user);
                delete newCourse['user'];
                console.log(newCourse);
                return newCourse;
            })
    }

    deleteCourse(id) {
        return fetch(serverUri + 'courses/' + id, {
            method: 'DELETE',
        }).then(response => response.json())
    }
}

export let CoursesService = new CoursesServiceClass();