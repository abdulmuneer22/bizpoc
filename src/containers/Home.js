import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Header from '../components/DrawerHeader'

export class Home extends Component {

    openDrawer = () => this.props.navigation.openDrawer()

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
                    <Text> Inside Drawer Home </Text>
                </View>
                
            </View>
        )
    }
}



export default Home
