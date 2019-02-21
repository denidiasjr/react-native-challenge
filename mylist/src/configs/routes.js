import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import {
    Icon
} from 'native-base';
import {
  MAIN_COLOR
} from './constants';

// Screens
import LoginScreen from '../screens/LoginScreen';
import ListScreen from '../screens/ListScreen';
import ConfigScreen from '../screens/ConfigScreen';

const TabNavigator = createBottomTabNavigator(
    {
      List: ListScreen,
      Config: ConfigScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;

              let iconName;
              if (routeName === 'List') {
                iconName = 'list'; 
              } else if (routeName === 'Config') {
                iconName = 'cog';
              }
      
              return <Icon type="FontAwesome" name={iconName} style={{fontSize: 20, color: 'black'}} />
            },
          }),
          tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel: true,
            style: {
                backgroundColor: MAIN_COLOR
            }
          },
    }
);

const AppStackNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Home: TabNavigator
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    }
);

export default createAppContainer(AppStackNavigator);
