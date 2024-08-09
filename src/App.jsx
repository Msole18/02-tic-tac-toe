import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'
import {Square} from './components/Square'
import {WinnerModal} from './components/WinnerModal'
import { checkWinner, checkEndGame } from './logic/board'
import { TURNS } from './constants'


function App() {
  
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );
  // Set player turn
  const [turn, setTurn] = useState(TURNS.X);
  // Set Winner; null if with dont have a winner, set false ir we have a draw
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {

    if(board[index] || winner ) return
    //Update board status
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)
    //Change player turns
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    // Check if we have a Winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
  }


  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset Game</button>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square 
                  index={index} 
                  key={index}
                  updateBoard={updateBoard} 
                >
                  {board[index]}
                </Square>
              )

            })
          }
        </section> 

        <section className='turn' >
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
    </>
  )
}

export default App
