import React from 'react'

const Array = () => {

    // Decalre array 

    const arr = ["Rohit","Virat","Surya","Rishabh","Axar","Bumrah","kuldeep"];
    
  return (
    <>
    {arr.map((value,index,arr) => {
      return(
        <>
          <h1>Indian cricketer = {value}</h1>
        </>
      )
    })}
    </>
  )
}

export default Array
