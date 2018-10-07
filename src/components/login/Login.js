import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

class Login extends Component {
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

                <View style={styles.button}>
                    <Button
                        title='Login'
                        buttonStyle={{
                            backgroundColor: '#000000'
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   components: {
       width: '100%',
       alignItems: 'center',
   },

   input: {
       width: '80%',
       paddingTop: 15
   },

    button: {
       width: '50%',
        paddingTop: 25
    }

});
export default Login;
