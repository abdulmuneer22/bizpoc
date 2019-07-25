import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/DrawerHeader'
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'
import ScreenThree from './ScreenThree'


import { createStackNavigator, createAppContainer } from 'react-navigation';

const B1StackNavigator = createStackNavigator(
	{
        ScreenOne : {
            screen: ScreenOne
        },
        ScreenTwo : {
            screen: ScreenTwo
        },
        ScreenThree : {
            screen: ScreenThree
        }
    },
    {
		initialRouteName: 'ScreenOne',
		headerMode : 'float'
	}
);







export default createAppContainer(B1StackNavigator);
