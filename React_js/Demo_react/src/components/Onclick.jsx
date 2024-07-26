import React from 'react'
import { useState } from 'react'

const Onclick = () => {

    const [count, setCount] = useState(0);

  return (
   <>
   <h1>This is UseState event</h1>
   <h1>This is Onclick event</h1>
   <h1>{count}</h1>
   <button className='w-40 h-10 bg-zinc-700 font-bold' onClick={() => setCount(count+1)}>Click here</button>
   </>
  )
}

export default Onclick
