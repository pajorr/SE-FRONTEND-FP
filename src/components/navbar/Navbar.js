import React, {Component} from 'react';
import { Header } from 'react-native-elements';

class Navbar extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                outerContainerStyles={{ backgroundColor: '#000000', width: '100%', position: 'absolute', top: 0}}
            />
        )
    }
}
export default Navbar;

