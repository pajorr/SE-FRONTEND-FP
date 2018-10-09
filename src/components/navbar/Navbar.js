import React, {Component} from 'react';
import Sidebar from './../sidebar/Sidebar'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements';

class Navbar extends Component {
    render() {
        return (
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        outerContainerStyles={{ backgroundColor: '#000000', width: '100%', position: 'absolute', top: 0}}
                    />
                </View>
        )
    }
}

export default Navbar;

