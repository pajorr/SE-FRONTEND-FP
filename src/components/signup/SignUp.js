import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
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
                        ref="usernameValue"
                        onChangeText={(usernameValue) => this.setState({usernameValue})}
                        value={this.state.usernameValue}
                    />
                </View>

                <View style={styles.input}>
                    <Input
                        placeholder='Name'
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='black'
                            />
                        }
                        ref="nameValue"
                        onChangeText={(nameValue) => this.setState({nameValue})}
                        value={this.state.nameValue}
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
                        ref="passwordValue"
                        onChangeText={(passwordValue) => this.setState({passwordValue})}
                        value={this.state.passwordValue}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title='Sign Up'
                        buttonStyle={{
                            backgroundColor: '#000000'
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
