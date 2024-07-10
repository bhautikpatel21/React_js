import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1 style={{color:"red"}}>Card name is {props.name}</h1>
      <h2>Card price is {props.price}</h2>
    </div>
  )
}

export default Card
