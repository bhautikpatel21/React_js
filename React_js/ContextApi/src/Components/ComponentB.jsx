import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div>
      <h1 className='heading'>This is Components B</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB