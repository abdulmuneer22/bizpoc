import React from "react";
import { createDrawerNavigator } from "react-navigation";
import DrawerComponent from '../components/DrawerComponent'

import Home from '../containers/Home'
import B1Stack from '../containers/B1'
import B2Stack from '../containers/B2'

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      params: {
        title: "Home"
      }
    },
    B1Stack: {
        screen: B1Stack,
        params: {
          title: "B1Stack"
        }
      },
      B2Stack: {
        screen: B2Stack,
        params: {
          title: "B2Stack"
        }
      }
  },
  {
    contentComponent: props => <DrawerComponent {...props} />,
    drawerWidth: 300,
    initialRouteName: "Home",
  },
  
);

export default DrawerNavigator;