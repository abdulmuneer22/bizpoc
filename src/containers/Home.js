import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'

import Header from '../components/DrawerHeader'

export class Home extends Component {

    openDrawer = () => this.props.navigation.openDrawer()

    gotoB1 = () => this.props.navigation.navigate("B1Navigator")

    gotoB2 = () => this.props.navigation.navigate("B2Navigator")

    render() {
        return (
            <View style={{
                flex : 1,
                paddingTop : 80
            }}>
                <Header openDrawer={this.openDrawer}/>
                <View style={{
                    flex : 1,
                    justifyContent : 'center',
                    alignItems : 'center',
                }}>
                    <Button title="Go to B1 Stack" onPress={this.gotoB1}/>
                    <Button title="Go to B2 Stack" onPress={this.gotoB2}/>
                </View>
                
            </View>
        )
    }
}



export default Home
