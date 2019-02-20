/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {
  Text, 
  View
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple'
      }
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
