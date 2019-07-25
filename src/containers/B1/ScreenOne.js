import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

export class ScreenOne extends Component {
    render() {
        return (
            <View>
                <Text> B1 ScreenOne </Text>
                <Button title="Go To B1 Screen Two" onPress={() => this.props.navigation.navigate("ScreenTwo")} />
            </View>
        )
    }
}

export default ScreenOne
