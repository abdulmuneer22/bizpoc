import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'


const DrapwerItems = [
    {
        name : "Home",
        index : 0,
        target : 'Home'
    },
    {
        name : "Item One",
        index : 1,
        target : 'ItemOne'
    },
    {
        name : "Item Two",
        index : 2,
        target : 'ItemTwo'
    }
]

export class DrawerComponent extends Component {

    handleDrawerItemPressed = (Item) => {
        this.props.navigation.navigate(Item.target)
    }

    render() {
        return (
            <View style={{
                flex : 1,
                backgroundColor :'white',
                justifyContent : 'flex-start',
                alignItems : 'flex-start',
                paddingTop : 80
            }}>
                {
                    DrapwerItems.map((itm) => <Button title={itm.name} key={itm.index}
                    onPress={() => this.handleDrawerItemPressed(itm)}
                    style={{
                        paddingVertical : 20
                    }}/>)
                }
                
            </View>
        )
    }
}

export default DrawerComponent
