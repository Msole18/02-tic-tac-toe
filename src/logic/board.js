import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // If there aren't a winner
    return null
  }

  export const checkEndGame = (newBoard) => {
    // check if we have empty squares
    return newBoard.every(square => square !== null)
  }