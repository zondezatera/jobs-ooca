import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native'

import { Board } from './src/features'

const App = () => (
  <SafeAreaView>
    <View style={{ alignItems: 'center' }}>
      <Board />
    </View>
  </SafeAreaView>
)

export default App
