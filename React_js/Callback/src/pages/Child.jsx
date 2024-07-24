import React, { memo } from 'react'

const Child = () => {
    console.log('Render Child Com')
  return (
    <div>
      <h1 className='heading'>This is Child Components</h1>
    </div>
  )
}

export default memo(Child)