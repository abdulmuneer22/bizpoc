import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

import Header from '../../components/DrawerHeader'

export class ScreenOne extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()}

    static navigationOptions = {
        title: 'B2 Stack Navigation',
    };
    render() {
        return (
            <View>
                <Header openDrawer={this.openDrawer}/>
                <Text> B2 ScreenOne </Text>
                <Button title="Go To B2 Screen Two" onPress={() => this.props.navigation.navigate("ScreenTwo")} />
            </View>
        )
    }
}

export default ScreenOne
