import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button, Icon} from "react-native-elements";
import {LightsOn, LightsOff} from "../../../../router/frisbeeConfig";

class Lights extends Component {
    render() {
        return(
            <View>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                    onPress={LightsOn}
                    title='Light On' />
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                    onPress={LightsOff}
                    title='Light Off' />
            </View>
        )
    }
}

export default Lights;