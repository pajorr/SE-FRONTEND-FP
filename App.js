import React, {Component} from 'react';
import Navbar from './src/components/navbar/Navbar';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FeedStack} from './router/config';

export default class App extends Component {
  render() {
    return (
        <View style={styles.main}>
            <View styles={styles.nav}>
                <Navbar />
            </View>
            <FeedStack />
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
