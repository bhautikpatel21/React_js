import React from 'react'

const Array = () => {

    // Decalre array 

    const arr = ["Rohit","Virat","Surya","Rishabh","Axar","Bumrah","kuldeep"];
    
  return (
    <>

    <h1>Indian cricketer </h1>

    {arr.map((value,index,arr) => {
      return(
        <>
         {value + " "} <br/>
        </>
      )
    })}
    </>
  )
}

export default Array
