import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

export class SplashScreen extends Component {



    render() {
        return (
            <View style={{
                flex  : 1,
                justifyContent : "center",
                alignItems : "center"
            }}>
                <Button title="OTP" onPress={() => this.props.navigation.navigate("OTPScreen")}/>
            </View>
        )
    }
}

export default SplashScreen
