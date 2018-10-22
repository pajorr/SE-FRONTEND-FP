import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import {HandleLogin} from "../../../router/frisbeeConfig";

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
                <Avatar
                    medium
                    rounded
                    source={{uri: "https://dne4i5cb88590.cloudfront.net/invisionpower-com/monthly_2016_11/avatar.thumb.png.c68c113d40702f1cbaf0ff7fbb57ee46.png"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />

                <View style={styles.input}>
                    <Input
                        placeholder='Email'
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
                        title='Login'
                        buttonStyle={{
                            backgroundColor: '#000000'
                        }}
                        onPress={(async () => {
                            console.log()
                            await HandleLogin(this.state.usernameValue, this.state.passwordValue);
                            return this.props.navigation.navigate('Home')
                        })}

                    />
                </View>

                <View styles={styles.input}>
                    <Text onPress={() => this.props.navigation.navigate('Signup')}>
                        Don't have an account? Click here to Sign Up.
                    </Text>
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
export default Login;
