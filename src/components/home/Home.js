import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView style={styles.card}>
                    <Card
                        title='Weather'
                        image={{uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ylvXET4l--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/tk2h6bkhghoubhuvl5wi.png'}}>
                        <Text style={{marginBottom: 10}}>
                            Partly Cloudy
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                            onPress={() => this.props.navigation.navigate('Weather')}
                            title='VIEW NOW' />
                    </Card>

                    <Card
                    title='Reminder'
                    image={{uri: 'https://media.cuinsight.com/wp-content/uploads/2016/04/bigstock-Business-meeting-in-an-office-21258410.jpg'}}>
                    <Text style={{marginBottom: 10}}>
                        Meeting at 13:25
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                        title='VIEW NOW' />
                    </Card>

                    <Card
                        title='Connections'
                        image={{uri: 'https://media.cuinsight.com/wp-content/uploads/2016/04/bigstock-Business-meeting-in-an-office-21258410.jpg'}}>
                        <Text style={{marginBottom: 10}}>
                            Meeting at 13:25
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#000000'}}
                            onPress={() => this.props.navigation.navigate('Connections')}
                            title='VIEW NOW' />
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignSelf: 'stretch'
    }
});

export default Home;