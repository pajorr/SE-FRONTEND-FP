import React, {Component} from 'react';
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native'
import {Button, Icon} from "react-native-elements";

class Reminder extends Component {

    renderWeekDays() {
        let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        return weekdays.map((day) => {
            return (
                <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
            );
        });
    }

    renderDays() {
        let weekdays = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
        return weekdays.map((day) => {
            return (
                <View style={styles.calendar_border}>
                <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
                </View>
            );
        });
    }


    render() {
        return(
            <ScrollView style={styles.container}>


                <View style={styles.header}>

                    <Button
                        icon={<Icon name='chevron-left' color='#ffffff' />}
                        buttonStyle={{backgroundColor: '#2f2b2b'}}
                        onPress={() => this.props.navigation.navigate('Home')}
                        title='Home' />

                    <View style={styles.header_item}>
                        <Text style={[styles.header_text, styles.text_center, styles.bold_text]}>Calendar</Text>
                    </View>

                </View>



                <View style={styles.date_header}>

                    <Icon name="chevron-left" size={30} color="#333" />

                        <Text style={[styles.header_text2, styles.text_center, styles.bold_text]}>2018</Text>

                    <Icon name="chevron-right" size={30} color="#333" />


                    <Icon name="chevron-left" size={30} color="#333" />

                        <Text style={[styles.header_text2, styles.text_center, styles.bold_text]}>October</Text>

                    <Icon name="chevron-right" size={30} color="#333" />


                </View>

                <View style={[styles.calendar]}>
                    { this.renderWeekDays() }
                </View>


                <View style={[styles.calendar]}>
                    { this.renderDays() }
                </View>

                <View style={[styles.calendar]}>
                    { this.renderDays() }
                </View>

                <View style={[styles.calendar]}>
                    { this.renderDays() }
                </View>

                <View style={[styles.calendar]}>
                    { this.renderDays() }
                </View>

                <View style={[styles.calendar]}>
                    { this.renderDays() }
                </View>

                <View style={styles.notes}>
                    <View style={styles.notes_notes}>

                        <Text style={styles.notes_text}>Watch the 76538th season of Dzolim</Text>

                    </View>
                    <View style={[styles.notes_selected_date]}>
                        <Text style={styles.small_text}>2:23 PM</Text>
                        <Text style={styles.big_text}>11</Text>
                        <View style={styles.inline}>
                            <Text style={styles.small_text}>THURSDAY</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

export default Reminder;

const styles = StyleSheet.create({
    degree: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 200
    },

    locationName: {
        textAlign: 'center',
        fontSize: 25
    },

    container: {
        flex: 1,
        backgroundColor: '#ffffff'

    },

    header: {
        backgroundColor: '#2f2b2b',
        flexDirection: 'row',
        padding: 20
    },
    header_item: {
        flex: 1
    },
    header_button: {
        flexDirection: 'row'
    },
    text_center: {
        textAlign: 'center'
    },
    text_right: {
        textAlign: 'right'
    },
    header_text: {
        color: '#fff',
        fontSize: 30
    },

    header_text2: {
        color: '#000',
        fontSize: 21
    },

    bold_text: {
        fontWeight: 'bold'
    },

    date_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 15
    },

    calendar_weekdays_text: {
        flex: 1,
        color: '#000000',
        textAlign: 'center',
        fontSize: 20

    },

    calendar: {
        flex: 1,
        flexDirection: 'row'
    },

    calendar_border: {
        borderColor: '#ffffff',
        backgroundColor: '#e8e8e8',
        width: 60,
        height: 60,
        borderWidth: 2
    },

    day: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 1,
        margin: 2
    },
    day_text: {
        textAlign: 'center',
        color: '#A9A9A9',
        fontSize: 12
    },

    notes: {
        marginTop: 10,
        padding: 20,
        borderColor: '#F5F5F5',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#FAFAFA'
    },
    notes_notes: {
        flex: 3
    },
    notes_text: {
        fontSize: 18
    },
    notes_selected_date: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    small_text: {
        fontSize: 15
    },
    big_text: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    }

})
