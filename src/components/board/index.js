import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Board = (props) => (
  <View style={styles.container}>
    <View style={[styles.line, { width: 3, height: 306, transform: [{ translateX: 100 }] }]} />
    <View style={[styles.line, { width: 3, height: 306, transform: [{ translateX: 200 }] }]} />
    <View style={[styles.line, { width: 306, height: 3, transform: [{ translateY: 100 }] }]} />
    <View style={[styles.line, { width: 306, height: 3, transform: [{ translateY: 200 }] }]} />
    {props.children}
  </View>
)

Board.propTypes = {
  children: PropTypes.any
}

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000',
  },
  line: {
    position: 'absolute',
    backgroundColor: '#000',
  },
})

export default Board
