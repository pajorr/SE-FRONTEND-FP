import {createStackNavigator, DrawerNavigator} from 'react-navigation';
import Home from "./../src/components/home/Home";
import Login from "./../src/components/login/Login";
import Sidebar from "./../src/components/sidebar/Sidebar";
import Signup from "./../src/components/signup/SignUp";
import Weather from "./../src/components/weather/Weather";
import Connections from "./../src/components/connections/Connections";

export const FeedStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {header: null}
        },
        Login: {
            screen: Login,
            navigationOptions: {header: null}
        },
        Signup: {
            screen: Signup,
            navigationOptions: {header: null}
        },
        Weather: {
            screen: Weather,
            navigationOptions: {header: null}
        },
        Connections: {
            screen: Connections,
            navigationOptions: {header: null}
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export const DrawerNav = DrawerNavigator({
    Sidebar: {
        screen: Sidebar
    }
})



