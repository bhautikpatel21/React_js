import React from 'react'
import { useRef,  useState } from 'react'
import UseRef from './Hooks/UseRef'


const App = () => {

  const ref1 = useRef(0)
  const [name , setName] = useState('skillQode')

  function Resetname(){
    setName('')
    ref1.current.focus()
  }

  function ApplyBgColor(){
    ref1.current.style.backgroundColor = 'orange'
  }

  console.log(ref1);
  

  return (
    <div>
      <h1 className='heading'>This is useRef Hook</h1>
      <UseRef/>
      <input ref={ref1} className='' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={Resetname}>Reset</button>
      <button onClick={ApplyBgColor}>ClickMe</button>
    </div>
  )
}

export default App
