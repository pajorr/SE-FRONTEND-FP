import React, {Component} from 'react';
import moment from 'moment';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button, Card, Icon} from "react-native-elements";
import {HandleReminder, reminderRes} from "../../../router/frisbeeConfig";

class ReminderToday extends Component {
    render() {
        return(
            <View>
                <Text>{reminderRes.body[0].event}</Text>
            </View>
        )
    }
    getReminderToday() {

    }
}

const maxDate = moment(new Date, 'DD-MM-YYYY').format();


export default ReminderToday;