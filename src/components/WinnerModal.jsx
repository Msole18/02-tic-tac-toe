import {Square}  from './Square.jsx'

export const WinnerModal = ({winner , resetGame}) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw' : 'Win'
  return (
    <div>
      {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Start again!</button>
                </footer>
              </div>
            </section>
          )
        }
    </div>
  )
}


