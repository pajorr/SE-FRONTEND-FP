import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {DrawerNav} from "./../../../router/config";

class SidebarButton extends Component {
    render(){
        return(
            <Button
            onPress={() => this.props.navigation.navigate('Sidebar')} />
        )
    }
}

export default SidebarButton;