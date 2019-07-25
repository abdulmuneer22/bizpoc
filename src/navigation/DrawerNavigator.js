import React from "react";
import { createDrawerNavigator } from "react-navigation";
import DrawerComponent from '../components/DrawerComponent'

import Home from '../navigation/HomeNavigation'
import ItemOne from '../containers/ItemOneScreen'
import ItemTwo from '../containers/ItemTwoScreen'

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      params: {
        title: "Home"
      }
    },
    ItemOne: {
        screen: ItemOne,
      },
      ItemTwo: {
        screen: ItemTwo,
      }
  },
  {
    contentComponent: props => <DrawerComponent {...props} />,
    drawerWidth: 300,
    initialRouteName: "Home",
  },
  
);

export default DrawerNavigator;