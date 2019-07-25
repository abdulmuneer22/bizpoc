import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen'
import OTPScreen from '../containers/OTPScreen'
import Completed from '../containers/Completed'

import DrawerNavigator from '../navigation/DrawerNavigator'

const AppNavigator = createStackNavigator(
	{
    SplashScreen: {
			screen: SplashScreen
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
		initialRouteName: 'SplashScreen',
		headerMode : 'none'
	}
);


export default createAppContainer(AppNavigator);


