import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen'
import Login from '../containers/Login';
import OTPScreen from '../containers/OTPScreen'
import Completed from '../containers/Completed'

import DrawerNavigator from '../navigation/DrawerNavigator'

const AppNavigator = createStackNavigator(
	{
    SplashScreen: {
			screen: SplashScreen
    },
		Login: {
			screen: Login
    },
    OTPScreen: {
			screen: OTPScreen
    },
    Completed: {
			screen: Completed
    },
    DrawerNavigator: {
			screen: DrawerNavigator
		}
	},
	{
		initialRouteName: 'DrawerNavigator'
	}
);


export default createAppContainer(AppNavigator);


