import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';
import {Button, Card, Icon} from "react-native-elements";
import {TelevisionOn, TelevisionOff} from "../../../../router/frisbeeConfig";

class Infrared extends Component {
    render() {
        return(
            <View>
                <Text h4 style={{color:'#23232b', fontWeight: 'bold', textAlign: 'center', paddingTop: 20, fontSize: 40}}>TELEVISION</Text>
                <Text h3 style={{color:'#23232b', fontWeight: 'bold', textAlign: 'center', paddingTop: 5, fontSize: 14}}>Connected to device:</Text>
                <Card
                    //image={{uri: }}
                    >
                    <Button
                        icon={<Icon name='radio-button-checked' color='white' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                        onPress={TelevisionOn}
                        title='Tv On' />
                </Card>

                <Card
                    //image={{uri: }}
                    >
                <Button
                    icon={<Icon name='radio-button-unchecked' color='white' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                    onPress={TelevisionOff}
                    title='Tv Off' />
                </Card>
            </View>
        )
    }
}

export default Infrared;