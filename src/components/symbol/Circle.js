import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const Circle = ({ xTranslate, yTranslate, color }) => (
  <View
    style={[
      styles.container,
      {
        transform: [
          { translateX: xTranslate ? xTranslate : 10 },
          { translateY: yTranslate ? yTranslate : 10 },
        ],
        backgroundColor: color ? color : '#000',
      },
    ]}>
    <View style={styles.innerCircle} />
  </View>
)

Circle.propTypes = {
  xTranslate: PropTypes.number,
  yTranslate: PropTypes.number,
  color: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  innerCircle: {
    backgroundColor: '#F5FCFF',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
})

export default Circle
