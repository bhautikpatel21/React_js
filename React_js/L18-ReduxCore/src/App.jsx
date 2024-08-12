import React from 'react'
import CakeContainer from './Components/CakeContainer'


const App = () => {
  return (
    <div>
    <h1 className="bg-black text-[#ff0000] text-6xl text-center justify-evenly py-5 font-serif">Redux Logger</h1>
    <div className=" bg-[#ca79fc] grid grid-cols-3 justify-evenly my-3 items-center gap-x-10">
    <CakeContainer />
    
</div>
</div>
  )
}

export default App