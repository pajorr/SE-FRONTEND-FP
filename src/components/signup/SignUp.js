import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar, Badge} from 'react-native-elements';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HandleLogin, HandleRegister} from "../../../router/frisbeeConfig";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: '',
            nameValue: ''
        }
    }
    render() {
        return (
            <View style={styles.components}>
                <Image style={{height: '40%'}}
                       source={require('./../../assets/BromeLogo.png')}
                       resizeMode='contain'
                />
                <Text h4 style={{paddingRight: 220, color:'#23232b', fontWeight: 'bold'}}>E-MAIL</Text>
                <View style={styles.input}>
                    <Input
                        leftIcon={
                            <Icon
                                name='envelope-o'
                                size={24}
                                color='black'
                            />
                        }
                        ref="usernameValue"
                        onChangeText={(usernameValue) => this.setState({usernameValue})}
                        value={this.state.usernameValue}
                        inputContainerStyle={{borderBottomWidth: 0}}
                    />
                </View>
                <Text h4 style={{paddingRight: 200, color:'#23232b', fontWeight: 'bold'}}>USERNAME</Text>

                <View style={styles.input}>
                    <Input
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        ref="nameValue"
                        onChangeText={(nameValue) => this.setState({nameValue})}
                        value={this.state.nameValue}
                        inputContainerStyle={{borderBottomWidth: 0}}
                    />
                </View>
                <Text h4 style={{paddingRight: 200, color:'#23232b', fontWeight: 'bold'}}>PASSWORD</Text>

                <View style={styles.input}>
                    <Input
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        ref="passwordValue"
                        onChangeText={(passwordValue) => this.setState({passwordValue})}
                        value={this.state.passwordValue}
                        inputContainerStyle={{borderBottomWidth: 0}}
                    />
                </View>

                <View style={styles.button}>
                    <Badge
                        value={'Sign Up'}
                        containerStyle={{
                            backgroundColor: '#e6b7c1'
                        }}
                        onPress={(async () => {
                            await HandleRegister(this.state.usernameValue, this.state.nameValue, this.state.passwordValue);
                            return this.props.navigation.navigate('Login')
                        })}
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
        width: '70%',
        height: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#82569c',
        borderRadius: 20,
        margin: 10
    },

    button: {
        width: '60%',
        paddingTop: 25,
        paddingBottom: 25
    }

});
export default Signup;
