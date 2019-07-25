import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = ({openDrawer}) => <TouchableOpacity
style={{
    paddingHorizontal : 10,
    paddingBottom : 20
}}
onPress={openDrawer}><Icon name="bars" size={20}/></TouchableOpacity>

export default Header