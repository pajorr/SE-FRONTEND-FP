import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';
import {Button, Icon, Card} from "react-native-elements";
import {LightsOn, LightsOff} from "../../../../router/frisbeeConfig";

class Lights extends Component {
    render() {
        return(
            <View>
                <Text h4 style={{color:'#23232b', fontWeight: 'bold', textAlign: 'center', paddingTop: 20, fontSize: 40}}>LIGHTS</Text>
                <Text h3 style={{color:'#23232b', fontWeight: 'bold', textAlign: 'center', paddingTop: 5, fontSize: 14}}>Connected to device:</Text>
                <Card>
                    <Button
                        icon={<Icon name='flash-on' color='white' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                        onPress={LightsOn}
                        title='Light On' />
                </Card>
                <Card>
                    <Button
                        icon={<Icon name='flash-off' color='white' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                        onPress={() => LightsOff()}
                        title='Light Off' />
                </Card>
            </View>
        )
    }
}

export default Lights;