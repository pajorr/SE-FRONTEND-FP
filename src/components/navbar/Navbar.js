import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements';

class Navbar extends Component {
    render() {
        return (
                <View>
                    <Header
                        leftComponent={{ icon: 'arrow-forward', color: '#fff' }}
                        centerComponent={{ text: 'BROME', style: { color: '#fff', fontWeight: 'bold' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        backgroundColor= '#e6b7c1'
                        containerStyle={{height: 65}}
                    />
                </View>
        )
    }
}

export default Navbar;

