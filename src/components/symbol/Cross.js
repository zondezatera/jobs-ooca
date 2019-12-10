import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const Cross = ({ xTranslate, yTranslate, color }) => (
  <View
    style={[
      styles.container,
      {
        transform: [
          { translateX: (xTranslate ? xTranslate : 10) + 35 },
          { translateY: (yTranslate ? yTranslate : 10) - 12 },
        ],
      },
    ]}>
    <View
      style={[
        styles.line,
        {
          transform: [{ rotate: '45deg' }],
          backgroundColor: color ? color : '#000',
        },
      ]}
    />
    <View
      style={[
        styles.line,
        {
          transform: [{ rotate: '135deg' }],
          backgroundColor: color ? color : '#000',
        },
      ]}
    />
  </View>
)

Cross.propTypes = {
  xTranslate: PropTypes.number,
  yTranslate: PropTypes.number,
  color: PropTypes.string,
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 105,
  },
})

export default Cross
