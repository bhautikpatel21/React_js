import { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
// import Example from './components/Menus'
import Accordions from './components/Accordian'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      {/* <Example/> */}
      {/* <Cards/> */}
      <Accordions/>
    </>
  )
}

export default App
