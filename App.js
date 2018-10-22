import React, {Component} from 'react';
import Navbar from './src/components/navbar/Navbar';
import Sidebar from './src/components/sidebar/Sidebar';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SidebarRouter} from './router/config';

export default class App extends Component {
  render() {
    return (
        <View style={styles.main}>
                <View styles={styles.nav}>
                    <Navbar />
                </View>
            <SidebarRouter/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
      width: '100%',
      height: '100%'
    },

    nav: {
        position: 'absolute'
    }
})
