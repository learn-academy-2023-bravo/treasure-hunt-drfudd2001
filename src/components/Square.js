import React from "react"

const Square = ({ square, index, handleGameplay }) => {

  const handleClick = () => {
    handleGameplay(index)
  }
  return (
    <>
      <div className="square" onClick={handleClick} key={index}>
        {square}
      </div>
    </>
  )
}
export default Square