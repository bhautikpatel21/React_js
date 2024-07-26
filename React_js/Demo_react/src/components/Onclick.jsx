import React from 'react'
import { useState } from 'react'

function Onclick() {
  const [count, setCount] = useState(0);

  return (
   <>
   <h1>This is on Click Method</h1>
   {count}
   <button className='w-40 h-14 bg-slate-500' onClick={() => setCount(count + 1)}>Click Here</button><br />
   </>
  )
}

export default Onclick
