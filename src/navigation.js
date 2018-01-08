import {StackNavigator} from 'react-navigation'
import Courses from './screens/StudentMode/Courses'
import {AddCourse} from './screens/TutorMode/AddCourse'
import LoginPage from './screens/LoginPage';
import {SplashScreen} from './screens/SplashScreen';

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
    SplashScreen: {
        screen: SplashScreen
    },
    LoginPage: {
        screen: LoginPage
    },
    StudentMode: {
        screen: StudentModeNavigator
    },
    TutorMode: {
        screen: TutorModeNavigator
    }
}, {
    headerMode: 'none'
});
