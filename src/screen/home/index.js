import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Card, Button, ButtonGroup } from 'react-native-elements'


const HomeScreen = (props) => {
  const [mode, selectedMode] = useState(0)
  const buttons = ['Easy', 'Hard', 'Multiple']
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card title="Tic Tac Toe" containerStyle={{ width: 350 }}>
        <Button title="Start" onPress={() => props.navigation.navigate('Board', { mode })} />
        <ButtonGroup
          onPress={(index) => selectedMode(index)}
          selectedIndex={mode}
          buttons={buttons}
          containerStyle={{ height: 35 }}
          />
      </Card>
    </View>
  )
}


HomeScreen.propTypes = {

}

export default HomeScreen
