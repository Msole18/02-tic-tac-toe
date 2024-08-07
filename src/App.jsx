import { useState } from 'react'
import './App.css'
import Square from './components/Square'

const TURNS = {
  X: '×',
  O: 'o'
}

function App() {
  
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    //Update board status
    const newBoard = [...board];
    newBoard[index] =  turn
    setBoard(newBoard)
    //Change player turns
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
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
      </main>
    </>
  )
}

export default App
