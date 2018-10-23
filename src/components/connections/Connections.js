import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';


class Connections extends Component {
    render() {
        return(
            <View>
                    <Card
                        //image={{uri: }}
                    >
                        <Button
                            icon={<Icon name='leak-add' color='white' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                            onPress={() => this.props.navigation.navigate('Infrared')}
                            title='TELEVISION' />
                    </Card>
                    <Card
                        //image={{uri: }}
                    >
                        <Button
                            icon={<Icon name='highlight' color='white' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                            onPress={() => this.props.navigation.navigate('Lights')}
                            title='LIGHTS' />
                    </Card>
                <Card
                    //image={{uri: }}
                >
                    <Button
                        icon={<Icon name='library-music' color='white' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                        onPress={() =>this.props.navigation.navigate('Music')}
                        title='SPOTIFY' />
                </Card>
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