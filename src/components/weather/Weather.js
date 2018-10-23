import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import MateriallyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    weatherRes
} from "../../../router/frisbeeConfig";

class Weather extends Component {
    render() {
        return(
            <View style={styles.wrap}>
                    <View style={styles.itemWrap}>
                        <MatIcon name='location-on' size={20} style={{textAlign: 'center', marginTop: 20, color:'#23232b'}}/>
                        <Text style={styles.locationName}>{weatherRes.body.data.city.name}</Text>
                        <Text style={styles.presentDate}>{weatherRes.body.data.lastUpdate.date}</Text>
                        <Text style={styles.degree}><Icon name='sun' size={30} style={{color: 'orange'}}/>{weatherRes.body.data.temperature.now.value}°C</Text>
                        <View style={styles.seperator}/>
                        <Text style={styles.locationName}>{weatherRes.body.data.weather.description}</Text>
                        <Text style={{marginTop: 20}}>
                            <MateriallyIcon name='weather-cloudy' size={20} style={{color: 'white'}}/>
                            <MateriallyIcon name='weather-cloudy' size={20} style={{color: 'white'}}/>
                            <MateriallyIcon name='weather-cloudy' size={20} style={{color: 'white'}}/>
                        </Text>
                    </View>
            </View>
        )
    }
}

export default Weather;

const styles = StyleSheet.create({
    degree: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
        marginTop: 20,
        color: '#23232b'
    },

    locationName: {
        textAlign: 'center',
        fontSize: 20,
        color: '#23232b'
    },

    presentDate: {
        textAlign: 'center',
        fontSize: 10,
        color: '#23232b'
    },

    feelsLike: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20,
        color: '#23232b'
    },
    wrap: {
        flex: 1,
        flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    itemWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '27%'
    },
    seperator: {
        borderBottomColor: '#23232b',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 20
    }
})