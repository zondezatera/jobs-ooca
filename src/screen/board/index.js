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
      historyLog,
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
      this.setState({
        currentPlay,
        isPlayerOne: !isPlayerOne,
        round: round + 1
      })
      setTimeout(() => {
        this.handleSelectorGameMode()
        this.selectorWinner()
      }, 500)
    }
  }

  handleSelectorGameMode() {
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
    const {
      isPlayerOne,
      playerOne,
      playerTwo,
      round
    } = this.state
    const board = POSITION_SLOT
    const playerTwoData = playerTwo
    playerOne.map((pos) => { board[pos] = 'X' })
    playerTwo.map((pos) => { board[pos] = 'O' })
    const bestPosition = this.minimax(board)
    playerTwoData.push(bestPosition.index)
    this.setState({ playerTwo: playerTwoData, isPlayerOne: !isPlayerOne, round: round + 1 })
  }

  emptyIndexies(board) {
    return board.filter((s) => s !== 'O' && s !== 'X')
  }

  winning(board, player) {
    if (
      (board[0] === player && board[1] === player && board[2] === player)
      || (board[3] === player && board[4] === player && board[5] === player)
      || (board[6] === player && board[7] === player && board[8] === player)
      || (board[0] === player && board[3] === player && board[6] === player)
      || (board[1] === player && board[4] === player && board[7] === player)
      || (board[2] === player && board[5] === player && board[8] === player)
      || (board[0] === player && board[4] === player && board[8] === player)
      || (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true
    }
    return false
  }

  minimax(board, playerSet = 'O') {
    // minimax algo
    // https://codepen.io/ElaMoscicka/pen/WdRGPB?editors=0010#0
    const boardPlay = board
    const availablePosition = this.emptyIndexies(boardPlay)
    if (this.winning(boardPlay, 'O')) {
      return { score: -10 }
    } if (this.winning(boardPlay, 'X')) {
      return { score: 10 }
    } if (availablePosition.length === 0) {
      return { score: 0 }
    }
    const moves = []
    for (let i = 0; i < availablePosition.length; i++) {
      const move = {}
      move.index = boardPlay[availablePosition[i]]
      boardPlay[availablePosition[i]] = playerSet
      if (playerSet === 'X') {
        const result = this.minimax(boardPlay, 'O')
        move.score = result ? result.score : { }
      } else {
        const result = this.minimax(boardPlay, 'X')
        move.score = result ? result.score : { }
      }
      boardPlay[availablePosition[i]] = move.index
      moves.push(move)
    }
    let bestMove; let bestScore
    if (playerSet === 'X') {
      bestScore = -10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      bestScore = 10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }
    return moves[bestMove]
  }

  isWinner(board) {
    return CONDITIONS.some((d) => d.every((item) => board.indexOf(item) !== -1))
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
        <Text>{result}</Text>
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
