import React, {Component} from 'react';
import {Avatar} from 'react-native-elements';

class Home extends Component {
    render() {
        return (
            <Avatar
                small
                rounded
                source={{uri: "https://i.gifer.com/MwHJ.gif"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
        )
    }
}
export default Home;