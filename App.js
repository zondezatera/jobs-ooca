import React from 'react'
import {
  View,
  Text
} from 'react-native'
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { HomeScreen, BoardScreen } from './src/screen'

const App = createStackNavigator({
  Home: HomeScreen,
  Board: BoardScreen
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default createAppContainer(App)
