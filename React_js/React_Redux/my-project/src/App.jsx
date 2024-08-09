import React from 'react'
import CakeContainer from './components/CakeContainer'
import BreadContainer from './components/BreadContainer'


const App = () => {

  return (
    <div>
      <h1 className='heading'>This is React Redux Functionality</h1>
      <CakeContainer/><br /><br />
      <BreadContainer/>
    </div>
  )
}

export default App
