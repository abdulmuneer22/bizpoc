import Home from '../containers/Home'
import B1Navigator from '../containers/B1'
import B2Navigator from '../containers/B2'


import { createStackNavigator, createAppContainer } from 'react-navigation';

const HomeNavigation = createStackNavigator(
	{
        Home : {
            screen : Home
        },
        B1Navigator : {
            screen: B1Navigator
        },
        B2Navigator : {
            screen: B2Navigator
        },
    },
    {
		initialRouteName: 'Home',
		headerMode : 'none'
	}
);



export default createAppContainer(HomeNavigation);
