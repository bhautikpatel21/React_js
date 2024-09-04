import React from 'react'
import { useState,useEffect } from 'react'

const UseEffect = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {
        alert("You are clicked")
    })

    return (
         
    <div>
      <h1>THis is useState method </h1>
      <div className='w-24 h-24 bg-yellow-200 flex justify-center items-center'>{count}</div>
      <button onClick={() => setCount(count+1)}>click here</button>
    </div>

  )
}

export default UseEffect
