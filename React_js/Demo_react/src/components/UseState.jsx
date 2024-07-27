import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [text, setText] = useState("This is text");

    const handleUpCase = () => {
        console.log("Clicked");
        // setText("After clicked text")

        if (text === "This is text") 
        {
          setText("After Clicked text");
        }
        else {
          setText("This is text")
        }
    }

  return (
    <>
    <br />
    <h1> i am using use State</h1><br />
    <textarea className='area' value={text}></textarea><br /> 
    <button className='w-40 h-16 bg-slate-600' onClick={handleUpCase}> Click Here</button>
    </>
  )
}

export default UseState
