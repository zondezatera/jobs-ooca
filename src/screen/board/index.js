import React, { Component } from 'react'
import { View, Text } from 'react-native'
import _ from 'lodash'
import { Circle, Cross, Board } from '../../components'
import {
  POSITION_SLOT,
  CENTER_POINTS,
  AREAS,
  CONDITIONS
} from '../../constant'

class BoardScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: [],
      playerTwo: [],
      isPlayerOne: true,
      round: 0,
      result: -1
    }
  }

  handledDetectPositionSlot(e) {
    const {
      isPlayerOne,
      playerOne,
      playerTwo,
      round
    } = this.state
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
      this.setState({ currentPlay, isPlayerOne: !isPlayerOne, round: round + 1 })
      setTimeout(() => {
        this.selectorGameMode()
        this.selectorWinner()
      }, 300)
    }
  }

  selectorGameMode() {
    const { navigation } = this.props
    const gameMode = JSON.stringify(navigation.getParam('mode'))
    switch (gameMode) {
      case '0':
        return this.dumpAI()
      case '1':
        return this.smartAI()
      default:
        break
    }
  }

  dumpAI() {
    const {
      isPlayerOne,
      playerOne,
      playerTwo,
      round
    } = this.state
    const playerTwoData = playerTwo
    const playHistory = _.concat(playerOne, playerTwo)
    const differencePosition = _.difference(POSITION_SLOT, playHistory)
    const setPosition = _.sample(differencePosition)
    playerTwoData.push(setPosition)
    this.setState({ playerTwo: playerTwoData, isPlayerOne: !isPlayerOne, round: round + 1 })
  }

  smartAI() {
    console.log('smartAI')
  }

  //  Handle Winner Logic
  isWinner(inputs) {
    return CONDITIONS.some((d) => d.every((item) => inputs.indexOf(item) !== -1))
  }

  selectorWinner() {
    const { playerOne, playerTwo, result } = this.state
    const playHistory = _.concat(playerOne, playerTwo)
    if (playHistory.length >= 5) {
      let res = this.isWinner(playerOne)
      if (res && result !== 0) {
        return this.setState({ result: 0 })
      }
      res = this.isWinner(playerTwo)
      if (res && result !== 1) {
        return this.setState({ result: 1 })
      }
    }
    if (playHistory.length === 9 && result === -1 && result !== 0) {
      this.setState({ result: 2 })
    }
  }

  render() {
    const {
      playerTwo,
      playerOne,
      round,
      isPlayerOne,
      result
    } = this.state
    console.log('result', result)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{round}</Text>
        <Text>{ isPlayerOne ? 'Player One' : 'Player Two'}</Text>
        <Board onDectectPosition={(e) => this.handledDetectPositionSlot(e)}>
          {
            playerOne.map((position, index) => {
              if (CENTER_POINTS[position]) {
                return (
                  <Cross
                    key={index}
                    xTranslate={CENTER_POINTS[position].x}
                    yTranslate={CENTER_POINTS[position].y}
                  />
                )
              }
              return null
            })
          }
          {
            playerTwo.map((position, index) => {
              if (CENTER_POINTS[position]) {
                return (
                  <Circle
                    key={index}
                    xTranslate={CENTER_POINTS[position].x}
                    yTranslate={CENTER_POINTS[position].y}
                    color='deepskyblue'
                  />
                )
              }
              return null
            })
          }
        </Board>
      </View>
    )
  }
}

export default BoardScreen
