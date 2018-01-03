import {StackNavigator} from 'react-navigation'
import {Courses} from './screens/StudentMode/Courses'
import {AddCourse} from './screens/TutorMode/AddCourse'
import LoginPage from './screens/LoginPage';

const StudentModeNavigator = StackNavigator({
    Courses: {
        screen: Courses
    }
});

const TutorModeNavigator = StackNavigator({
    AddCourse: {
        screen: AddCourse
    }
});

export const DefaultNavigator = StackNavigator({
    LoginPage: {
        screen: LoginPage
    }
}, {
    headerMode: 'none'
});
