import { createStackNavigator, createAppContainer , createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen';
import OTPScreen from '../containers/OTPScreen';
import Completed from '../containers/Completed';

import DrawerNavigator from '../navigation/DrawerNavigator';

const OnboardStack = createStackNavigator(
	{
		SplashScreen: {
			screen: SplashScreen
		},
		OTPScreen: {
			screen: OTPScreen
		},
		Completed: {
			screen: Completed
		}
	},
	{
		initialRouteName: 'SplashScreen',
		headerMode: 'screen'
	}
);

const AppNavigator = createSwitchNavigator(
	{
		Onboarding: OnboardStack,
		DrawerNavigator: {
			screen: DrawerNavigator
		}
	},
	{
		initialRouteName: 'Onboarding',
		headerMode: 'none'
	}
);

export default createAppContainer(AppNavigator);
