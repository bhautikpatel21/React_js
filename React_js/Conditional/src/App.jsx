import { useState } from 'react'
import Conditional from './Components/Conditional'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Conditional/>
    </>
  )
}

export default App
