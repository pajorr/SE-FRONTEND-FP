import React, { Component } from "react";
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from "./../src/components/home/Home";
import Login from "./../src/components/login/Login";
import Signup from "./../src/components/signup/SignUp";
import Weather from "./../src/components/weather/Weather";
import Connections from "./../src/components/connections/Connections";
import Reminder from "./../src/components/reminder/Reminder";
import Music from "./../src/components/music/Music";
import Lights from "./../src/components/connections/lights/Lights";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Avatar, Button, ListItem} from "react-native-elements";
import Infrared from "../src/components/connections/infrared/Infrared";
import ReminderToday from "../src/components/reminder/ReminderToday";

export const SidebarRouter = createStackNavigator({
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
    },
    Music: {
        screen: Music,
        navigationOptions: {header: null}
    },
    Reminder: {
        screen: Reminder,
        navigationOptions: {header: null}
    },
    Lights: {
        screen: Lights,
        navigationOptions: {header: null}
    },
    Infrared: {
        screen: Infrared,
        navigationOptions: {header: null}
    },
    ReminderToday: {
        screen: ReminderToday,
        navigationOptions: {header: null}
    }

},
    {
        initialRouteName: 'Login'
    },
);


