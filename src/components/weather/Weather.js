import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native'

class Weather extends Component {
    render() {
        return(
            <View>
                <Text style={styles.locationName}>LOCATION_NAME</Text>
                <Text>PRESENT_DATE</Text>
                <Text style={styles.degree}>00&deg;</Text>
                <Text>Feels like 00&deg;</Text>
            </View>
        )
    }
}

export default Weather;

const styles = StyleSheet.create({
    degree: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60
    },

    locationName: {
        textAlign: 'center',
        fontSize: 25
    }
})