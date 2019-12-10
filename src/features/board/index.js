import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

class Board extends Component {
  render() {
    return (
      <View style={styles.board}>
        <View
          style={styles.line}
            />
        <View
          style={[styles.line, {
            width: 3,
            height: 306,
            transform: [
              { translateX: 200 }
            ]
          }]}
            />
        <View
          style={[styles.line, {
            width: 306,
            height: 3,
            transform: [
              { translateY: 100 }
            ]
          }]}
            />
        <View
          style={[styles.line, {
            width: 306,
            height: 3,
            transform: [
              { translateY: 200 }
            ]
          }]}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000',
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: '#000',
    transform: [{ translateX: 100 }],
  },
})

export default Board
