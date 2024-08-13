import React from 'react'
import CakeContainer from './components/CakeContainer'
import TeaContainer from './components/Teacontainer'


const App = () => {

  return (
    <div>
      <h1 className='heading bg-black text-white font-bold text-4xl text-center'>This is React Redux Functionality</h1>
      <CakeContainer/>
      <TeaContainer/>
    </div>
  )
}

export default App
