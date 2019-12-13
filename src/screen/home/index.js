import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Card, Button, ButtonGroup } from 'react-native-elements'
import { GAME_MODE } from '../../constant'


const HomeScreen = (props) => {
  const [mode, selectedMode] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card title="Tic Tac Toe" containerStyle={{ width: 350 }}>
        <Button title="Start" onPress={() => props.navigation.navigate('Board', { mode })} />
        <ButtonGroup
          onPress={(index) => selectedMode(index)}
          selectedIndex={mode}
          buttons={GAME_MODE}
          selectedButtonStyle={{ backgroundColor: '#21ba45' }}
          containerStyle={{ height: 35, marginTop: 15 }}
        />
      </Card>
    </View>
  )
}


HomeScreen.propTypes = {
  navigation: PropTypes.object
}

export default HomeScreen
