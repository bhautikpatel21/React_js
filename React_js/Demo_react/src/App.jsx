import ImgComp from './components/ImgComp'
import React from 'react'
import Component1 from './components/Component1'
import Variable from './components/Variable'
import Array from './components/Array'

function App() {
  return (
    <>
    <div className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h1 className='text-red-600'>This is main component h1 tag</h1>
    <ImgComp/>
    <Component1/>
    <Variable/>
    <Array/>
    </div>
    </>
  )
}

export default App