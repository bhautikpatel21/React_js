import { useState } from 'react'
import './App.css'
import Conditional1 from './Components/Conditional1'
import Conditional2 from './Components/Conditional2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className=' w-[800px] h-[800px] border-4 border-black'>

    <header className='w-full h-[150px] bg-yellow-200 flex justify-center items-center border-b-4 border-black'>
      <h1 className='text-[60px] font-bold'>Racipes</h1>
    </header>

    <section className='flex w-full h-[650px]'>
      {/* <div className='h-full bg-slate-200 w-[49%]'></div> */}
      <Conditional1/>
      <Conditional2/>
    </section>

   </div>
    </>
  )
}

export default App
