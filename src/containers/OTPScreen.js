import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

export class OTPScreen extends Component {
    render() {
        return (
            <View style={{
                flex : 1,
                justifyContent : 'center',
                alignItems : "center"

            }}>
                <Button title="Profile" onPress={() => this.props.navigation.navigate("Completed")}/>
            </View>
        )
    }
}

export default OTPScreen
