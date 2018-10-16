import React, {Component} from 'react';
import {ScrollView, Image, View, StyleSheet, Avatar, Text} from 'react-native';
import {Slider} from 'react-native-elements';
import IconVariable from 'react-native-vector-icons/MaterialCommunityIcons';


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

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={{width: 250, height: 250}}
                        source={{uri: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F8fa9901829dbbc896a97502f34736087.500x500x1.jpg'}}
                    />
                </View>

                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 20, fontSize: 20}}> Girls Like U
                </Text>

                <Text style={{textAlign: 'center', fontSize: 15}}> Blackbear
                </Text>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center'}}>
                    <View>
                        <Slider style={{alignItems: 'stretch', justifyContent: 'center'}}
                            value={this.state.songPlayTime}
                            onValueChange={(val) => this.setState({songPlayTime: val})} />
                    </View>

                    <View>
                        <Text style={{textAlign: 'right'}}>Value: {this.state.songPlayTime}</Text>
                    </View>
                </View>

                <View style={styles.musicButtons}>
                    <View style={styles.container}>
                        <IconVariable name='shuffle' size={25}
                            />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='skip-previous' size={50}
                                      />
                    </View>


                    <View style={styles.container}>
                        <IconVariable name='play' size={50}
                                      />
                    </View>


                    <View style={styles.container}>
                        <IconVariable name='skip-next' size={50}
                                      />
                    </View>

                    <View style={styles.container}>
                        <IconVariable name='repeat' size={25}
                                      />
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