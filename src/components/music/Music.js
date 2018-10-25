import React, {Component} from 'react';
import {ScrollView, Image, View, StyleSheet, Text} from 'react-native';
import {Slider, Avatar} from 'react-native-elements';
import IconVariable from 'react-native-vector-icons/MaterialCommunityIcons';
import {MusicPause, MusicNext, MusicPlay, MusicPrevious} from "../../../router/frisbeeConfig";


class Music extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songPlayTime: 1
        }
    }
    render () {
        return (
            <ScrollView contentContainerStyle>

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 75}}>
                    <Image
                        style={{width: 250, height: 250}}
                        source={{uri: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F8fa9901829dbbc896a97502f34736087.500x500x1.jpg'}}
                    />
                </View>

                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 20, fontSize: 20}}> SONG_NAME
                </Text>

                <Text style={{textAlign: 'center', fontSize: 15}}> ARTIST_NAME
                </Text>

            <View style={{alignItems: 'center'}}>
                <View style={styles.musicButtons}>
                    <View style={styles.container}>
                        <IconVariable name='shuffle' size={25}
                        />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='skip-previous' size={50}
                         onPress={MusicPrevious}
                        />
                    </View>


                    <View style={styles.container}>
                        <IconVariable name='play' size={50}
                         onPress={MusicPlay}
                        />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='pause' size={50}
                         onPress={MusicPause}
                        />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='skip-next' size={50}
                         onPress={MusicNext}
                        />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='repeat' size={25}
                        />
                    </View>
                </View>
            </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    styleViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    musicButtons: {
        width: 300,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    }
});

export default Music;