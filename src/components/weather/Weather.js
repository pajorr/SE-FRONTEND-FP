import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import MateriallyIcon from "react-native-vector-icons/MaterialCommunityIcons";

class Weather extends Component {
    render() {
        return(
            <View style={styles.wrap}>
                <Image source={{uri: 'https://www.setaswall.com/wp-content/uploads/2017/10/Blur-Background-6z-Wallpaper-1080x1920.jpg'}} style={styles.backgroundImage} />
                    <View style={styles.itemWrap}>
                        <MatIcon name='location-on' size={20} style={{textAlign: 'center', marginTop: 20, color:'#ebebeb'}}/>
                        <Text style={styles.locationName}>Jakarta</Text>
                        <Text style={styles.presentDate}>10/10/2018</Text>
                        <Text style={styles.degree}><Icon name='sun' size={30} style={{color: 'orange'}}/>69&deg;</Text>
                        <Text style={styles.feelsLike}>Feels like 80&deg;</Text>
                        <View style={styles.seperator}/>
                        <Text style={styles.locationName}>Hourly</Text>
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
        color: '#ebebeb'
    },

    locationName: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ebebeb'
    },

    presentDate: {
        textAlign: 'center',
        fontSize: 10,
        color: '#ebebeb'
    },

    feelsLike: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20,
        color: '#ebebeb'
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
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 20
    }
})