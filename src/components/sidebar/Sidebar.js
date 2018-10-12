import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <View style={styles.user}>
                    <Avatar
                        size="medium"
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                        activeOpacity={0.7}
                    />
                    <Text style={{color: '#ffffff'}}>Jane Doe</Text>
                    <Button
                        title='Change User'
                        buttonStyle={{
                            backgroundColor: '#ffffff'
                        }}
                        titleStyle={{
                            color: '#000000'
                        }}
                        containerStyle={{
                            marginTop: 10,
                            marginBottom: 10
                        }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
                <ScrollView style={styles.card}>

                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                onPress={() => item.press}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignSelf: 'stretch',
    },
    user: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#000000',
        alignItems: 'center'
    }
});

const list = [
    {
        title: 'Room Functions',
        icon: 'airline-seat-recline-normal',
        press: "this.props.navigation.navigate('Weather')"
    },
    {
        title: 'Spotify',
        icon: 'library-music',
        press: "this.props.navigation.navigate('Weather')"
    },
    {
        title: 'Reminder & Alarms',
        icon: 'alarm',
        press: "this.props.navigation.navigate('Weather')"
    },
    {
        title: 'Weather',
        icon: 'wb-sunny',
        press: "this.props.navigation.navigate('Weather')"
    }
]

export default Sidebar;