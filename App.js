import React from 'react'
import {
  View,
  Text
} from 'react-native'
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Board } from './src/features'

// const App = () => (
//   <View style={{ alignItems: 'center' }}>
//     <Board />
//   </View>
// )
const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
)

const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
})

export default createAppContainer(App)
