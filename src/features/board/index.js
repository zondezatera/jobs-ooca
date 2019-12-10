import React, { Component } from 'react'
import { Circle, Cross, Board } from '../../components'


const CENTER_POINTS = [
  { x: 10, y: 10 },
  { x: 113, y: 10 },
  { x: 213, y: 10 },
  { x: 10, y: 113 },
  { x: 113, y: 113 },
  { x: 213, y: 113 },
  { x: 10, y: 213 },
  { x: 113, y: 213 },
  { x: 213, y: 213 },
]

class BoardScreen extends Component {
  render() {
    return (
      <Board>
        <Circle
          xTranslate={CENTER_POINTS[1].x}
          yTranslate={CENTER_POINTS[1].y}
          color='deepskyblue'
          />
        <Cross
          xTranslate={CENTER_POINTS[0].x}
          yTranslate={CENTER_POINTS[0].y}
          />
      </Board>
    )
  }
}

export default BoardScreen
