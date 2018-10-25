import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button, Card, Icon} from "react-native-elements";
import {HandleReminder, reminderRes} from "../../../router/frisbeeConfig";

class ReminderToday extends Component {
    /*ScheduleArray() {

        var arr = [];
        for(var key in reminderRes) {
            arr.push(reminderRes[key]);
        }

        console.log(arr);

        return arr.map(function(reminder, i){
            return(
                <View key={i}>
                    <Card>
                        <Text>{reminder.event}</Text>
                        <Text>{reminder.time}</Text>
                    </Card>
                </View>
            );
        });
    }
*/
    render() {
        return(
            <View>
                <Card>
                    <Text>{reminderRes.body[0].event}</Text>
                    <Text>{reminderRes.body[0].time}</Text>
                </Card>
                <Card>
                    <Text>{reminderRes.body[1].event}</Text>
                    <Text>{reminderRes.body[1].time}</Text>
                </Card>
            </View>
        )
    }
}





export default ReminderToday;