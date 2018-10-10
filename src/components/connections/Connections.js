import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

class Connections extends Component {
    render() {
        return(
            <View>
                <ScrollView style={styles.card}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
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
        alignSelf: 'stretch'
    }
});

const list = [
    {
        title: 'Server',
        icon: 'av-timer'
    },
    {
        title: 'Speaker & Mic',
        icon: 'headset-mic'
    },
    {
        title: 'Lights',
        icon: 'highlight'
    },
    {
        title: 'Spotify',
        icon: 'library-music'
    },
    {
        title: 'TV & AC',
        icon: 'leak-add'
    },
    {
        title: 'Weather',
        icon: 'wb-sunny'
    }
]

export default Connections;