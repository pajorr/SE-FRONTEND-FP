import React, {Component} from 'react';
import Navbar from './src/components/navbar/Navbar';
import Sidebar from './src/components/sidebar/Sidebar';
import SideMenu from 'react-native-side-menu';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FeedStack} from './router/config';

export default class App extends Component {
  render() {
    const menu = <Sidebar />

    return (
        <View style={styles.main}>
            <SideMenu menu={menu}>
                <View styles={styles.nav}>
                    <Navbar />
                </View>
                <FeedStack />
            </SideMenu>
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
