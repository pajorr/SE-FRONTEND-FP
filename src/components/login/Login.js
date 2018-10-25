import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar, Badge, Tile} from 'react-native-elements';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {HandleLogin, HandleWeather} from "../../../router/frisbeeConfig";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: ''
        }
    }


    render() {
        return (
            <View style={styles.components}>
                <Image style={{height: '40%'}}
                    source={require('./../../assets/BromeLogo.png')}
                    resizeMode='contain'
                />

                <Text h4 style={{paddingRight: 200, color:'#23232b', fontWeight: 'bold'}}>E-MAIL</Text>

                <View style={styles.input}>
                    <Input
                        underlineColorAndroid='rgba(0,0,0,0)'
                        leftIcon={
                            <Icon
                                name='user'
                                size={20}
                                color='black'
                            />
                        }
                        ref="usernameValue"
                        onChangeText={(usernameValue) => this.setState({usernameValue})}
                        value={this.state.usernameValue}
                        inputContainerStyle={{borderBottomWidth: 0}}
                    />
                </View>

                <Text h4 style={{paddingRight: 180, color:'#23232b', fontWeight: 'bold'}}>PASSWORD</Text>

                <View style={styles.input}>
                    <Input
                        leftIcon={
                        <Icon
                            name='lock'
                            size={20}
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
                        value={'Login'}
                        containerStyle={{
                            backgroundColor: '#e6b7c1'
                        }}
                        onPress={(async () => {
                            await HandleLogin(this.state.usernameValue, this.state.passwordValue);
                            Alert.alert(
                                '',
                                'Login Successful',
                                [
                                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                            )
                            return this.props.navigation.navigate('Home')
                        })}

                    />
                </View>

                <View styles={styles.input}>
                    <Text onPress={() => this.props.navigation.navigate('Signup')}>
                        Don't have an account? Sign up now!
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   components: {
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#ffffff',
       height: '100%'
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
        margin: 10
    },

});
export default Login;
