import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/home/Home';
import Navbar from './src/components/navbar/Navbar';
import Login from './src/components/login/Login';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Navbar />
        </View>
            <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
