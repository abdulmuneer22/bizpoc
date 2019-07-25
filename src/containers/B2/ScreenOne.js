import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

export class ScreenOne extends Component {
    render() {
        return (
            <View>
                <Text> B2 ScreenOne </Text>
                <Button title="Go To B2 Screen Two" onPress={() => this.props.navigation.navigate("ScreenTwo")} />
            </View>
        )
    }
}

export default ScreenOne
