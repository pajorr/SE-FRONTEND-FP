import React, {Component} from 'react';
import Sidebar from './../sidebar/Sidebar'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements';

class Navbar extends Component {
    render() {
        return (
                <View>
                    <Header
                        leftComponent={{ icon: 'arrow-forward', color: '#fff' }}
                        centerComponent={{ text: 'Brome', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        outerContainerStyles={{ backgroundColor: '#000000'}}
                    />
                </View>
        )
    }
}

export default Navbar;

