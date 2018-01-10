import {StackNavigator} from 'react-navigation';
import Courses from './screens/Courses';
import AddCourse from './screens/AddCourse';
import LoginPage from './screens/LoginPage';
import SplashScreen from './screens/SplashScreen';
import Settings from './screens/Settings';
import Course from './screens/Course';

const MainAppNavigator = StackNavigator({
    Courses: {
        screen: Courses
    },
    Settings: {
        screen: Settings
    },
    AddCourse: {
        screen: AddCourse
    },
    Course: {
        screen: Course
    }
});

export const DefaultNavigator = StackNavigator({
    SplashScreen: {
        screen: SplashScreen
    },
    LoginPage: {
        screen: LoginPage
    },
    MainApp: {
        screen: MainAppNavigator
    }
}, {
    headerMode: 'none'
});
