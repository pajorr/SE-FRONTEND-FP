import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button, Icon} from "react-native-elements";
import {TelevisionOn, TelevisionOff} from "../../../../router/frisbeeConfig";

class Infrared extends Component {
    render() {
        return(
            <View>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                    onPress={TelevisionOn}
                    title='Tv On' />
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                    onPress={TelevisionOff}
                    title='Tv Off' />
            </View>
        )
    }
}

export default Infrared;