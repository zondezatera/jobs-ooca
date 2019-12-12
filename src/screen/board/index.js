import React, { Component } from 'react'
import { View } from 'react-native'
import _ from 'lodash'
import { Circle, Cross, Board } from '../../components'
import { CENTER_POINTS, AREAS } from '../../constant'

class BoardScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: [],
      playerTwo: [],
      isPlayerOne: true,
      gameMode: '',
      round: 0,
      result: ''
    }
  }

  handledDetectPositionSlot(e) {
    const { isPlayerOne, playerOne, playerTwo } = this.state
    const playerOneData = playerOne
    const playerTwoData = playerTwo
    const position = _.find(AREAS, (slot) => _.inRange(e.locationX, slot.startX, slot.endX) && _.inRange(e.locationY, slot.startY, slot.endY))
    const positionSlot = !_.isEmpty(position) ? position.slot : 0
    if (isPlayerOne) {
      playerOneData.push(positionSlot)
    } else {
      playerTwoData.push(positionSlot)
    }
    if (_.intersection(playerOneData, playerTwoData).length === 0) {
      const currentPlay = isPlayerOne ? { playerOne: playerOneData } : { playerTwo: playerTwoData }
      this.setState({ currentPlay, isPlayerOne: !isPlayerOne })
    }
  }

  render() {
    const { playerTwo, playerOne } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Board onDectectPosition={(e) => this.handledDetectPositionSlot(e)}>
          {
            playerOne.map((position, index) => (
              <Cross
                key={index}
                xTranslate={CENTER_POINTS[position].x}
                yTranslate={CENTER_POINTS[position].y}
              />
            ))
          }
          {
            playerTwo.map((position, index) => (
              <Circle
                key={index}
                xTranslate={CENTER_POINTS[position].x}
                yTranslate={CENTER_POINTS[position].y}
                color='deepskyblue'
              />
            ))
          }
        </Board>
      </View>
    )
  }
}

export default BoardScreen
