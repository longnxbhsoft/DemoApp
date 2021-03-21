/* eslint-disable prettier/prettier */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components
import ItemTabBarBottom from './ItemTabNavigation'

// //icon
import images from '../../accest/image'

// //theme
// import { Palette } from '../../themes/colors'

//screen
import Home from '../../container/homescreen';
import Soccer from '../../container/soccerscreen'
import Lottery from '../../container/lotteryscreen'
import Sale from '../../container/salesrceen'
const Tab = createBottomTabNavigator()

const customeTabOptions = {
  activeTintColor: 'red',
  style: {
    height: 68
  },
  labelStyle: {
    bottom: 10
  },
  showLabel: false
}




enum ScreenName {
  Home = "Home",
  Lottery = "Lottery",
  Soccer = "Soccer",
  Sale = "Sale"
}

const BottomTab = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let image;
            switch (route.name) {
              case ScreenName.Home:
                image = images.home;
                break;
              case ScreenName.Lottery:
                image = images.bingo;
                break;
              case ScreenName.Soccer:
                image = images.soccer;
                break;
              case ScreenName.Sale:
                image = images.shopping;
                break;
            }

            return <ItemTabBarBottom
              imageUri={image}
              tintColor={color}
              isFocused={focused}
            />
          }
        }
      }}
      tabBarOptions={
        customeTabOptions
      }
    >
      <Tab.Screen name={ScreenName.Home} component={Home} />
      <Tab.Screen name={ScreenName.Lottery} component={Lottery} />
      <Tab.Screen name={ScreenName.Soccer} component={Soccer} />
      <Tab.Screen name={ScreenName.Sale} component={Sale} />

    </Tab.Navigator>
  )
}

export default BottomTab;