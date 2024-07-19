import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import list_rendaring from './components/list_rendaring'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <list_rendaring/>
    </>
  )
}

export default App 
