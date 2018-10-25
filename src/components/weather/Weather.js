import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from "react-native-vector-icons/Feather";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import MateriallyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    weatherRes
} from "../../../router/frisbeeConfig";

class Weather extends Component {
    render() {
        return(
            <View>
                    <View>
                        <Card>
                            <MatIcon name='location-on' size={20} style={{textAlign: 'center', marginTop: 20, color:'#23232b'}}/>
                            <Text style={styles.locationName}>{weatherRes.body.data.city.name}</Text>
                            <Text style={styles.presentDate}>{weatherRes.body.data.lastUpdate.date}</Text>
                            <Text style={styles.degree}><Icon name='sun' size={30} style={{color: 'orange'}}/>{weatherRes.body.data.temperature.now.value}°C</Text>
                            <View style={styles.seperator}/>
                            <Text style={styles.locationName}>{weatherRes.body.data.weather.description}</Text>
                        </Card>
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
        flexDirection: 'column',
        width: '100%'
    },
    itemWrap: {
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        position: 'absolute',
    },
    seperator: {
        borderBottomColor: '#23232b',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 20
    }
})