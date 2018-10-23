import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet, AsyncStorage} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar, Badge} from 'react-native-elements';
import {HandleLogout, HandleReminder, HandleWeather, userRes} from "../../../router/frisbeeConfig";


class Home extends Component {

    render() {
        return (
            <View>
                <ScrollView style={styles.card}>
                    <Card>
                        <Text style={styles.userText}>
                            Hello {userRes.body.data.name}!
                        </Text>
                        <Badge
                            containerStyle={{backgroundColor: '#e6b7c1', marginTop: 10}}
                            onPress={async () => {
                                await HandleLogout;
                                return this.props.navigation.navigate('Login');
                            }}
                            value="Change User" />
                    </Card>
                    <Card
                        image={require('./../../assets/bromefull.png')}
                    >
                        <Text style={{marginBottom: 10}}>
                            Welcome to Brome!
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            Tap here for a quick start guide.
                        </Text>
                    </Card>

                    <Card
                        title='Connections'
                        image={require('./../../assets/gear.jpg')}>
                        <Badge
                            containerStyle={{backgroundColor: '#e6b7c1', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate('Connections')}
                            value="Go to Connections" />
                    </Card>

                    <Card
                        title='Weather'
                        image={require('./../../assets/weather.jpg')}>
                        <Badge
                            containerStyle={{backgroundColor: '#e6b7c1', marginTop: 10}}
                            onPress={async () => {
                                await HandleWeather();
                                return this.props.navigation.navigate('Weather');
                            }}
                            value="Go to Weather" />
                    </Card>

                    <Card
                    title='Reminder'
                    image={require('./../../assets/meeting.jpg')}>
                        <Badge
                            containerStyle={{backgroundColor: '#e6b7c1', marginTop: 10}}
                            onPress={async () => {
                                await HandleReminder(userRes.body.data.id);
                                return this.props.navigation.navigate('ReminderToday');
                            }}
                            value="Go to Reminder" />
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignSelf: 'stretch'
    },
    userText: {
      textAlign: 'center',
      fontWeight: 'bold'
    }
});

export default Home;