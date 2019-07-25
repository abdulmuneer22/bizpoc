import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => (
	<TouchableOpacity onPress={() => navigation.goBack()}>
		<Icon name="chevron-left" size={30}/>
	</TouchableOpacity>
);


export default Header