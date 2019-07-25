import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

export class ScreenTwo extends Component {
    render() {
        return (
            <View>
                <Text> B1 ScreenTwo </Text>
                <Button title="Go To B1 Screen Three" onPress={() => this.props.navigation.navigate("ScreenThree")} />
            </View>
        )
    }
}

export default ScreenTwo
