import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/DrawerHeader'

export class B2Stack extends Component {

    openDrawer = () => this.props.navigation.openDrawer()

    render() {
        return (
            <View style={{
                flex : 1,
                alignItems : 'flex-start'
            }}>
                <Header openDrawer={this.openDrawer}/>
                <Text> B2Stack </Text>
            </View>
        )
    }
}

export default B2Stack
