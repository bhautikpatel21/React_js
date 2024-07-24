import React from 'react'
import Child from './Child'
import { useState , useCallback } from 'react'

const Callback = () => {

    const [count   , setCount] = useState(0)

    const Increment  = useCallback(() => setCount(count + 1) , [count])

  return (
    <div>
      <h1 className='heading'>This is React useCallback Hook</h1>
      <Child/>
      <span className='btn'>{count}</span>
      <button className='btn' onClick={Increment}>Increment</button>
    </div>
  )
}

export default Callback 