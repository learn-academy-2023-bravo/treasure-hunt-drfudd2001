import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square.js"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGameplay = (clickedSquare) => {
    alert(clickedSquare)
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {
          board.map(( square, index ) => {
            return < Square 
              square={ square }
              index={ index }
              handleGameplay={handleGameplay}
            />
          })
        }
      </div>   
    </>
  )
}

export default App
