import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FeedStack} from './router/config';

export default class App extends Component {
  render() {
    return (
            <FeedStack />
    );
  }
}

