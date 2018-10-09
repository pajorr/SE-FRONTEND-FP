import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

class Signup extends Component {
    render() {
        return (
            <View style={styles.components}>

                <View style={styles.input}>
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>

                <View style={styles.input}>
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>

                <View style={styles.input}>
                    <Input
                        placeholder='Re-enter Password'
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title='Sign Up'
                        buttonStyle={{
                            backgroundColor: '#000000'
                        }}
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    components: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        paddingTop: 15
    },

    button: {
        width: '50%',
        paddingTop: 25,
        paddingBottom: 25
    }

});
export default Signup;
