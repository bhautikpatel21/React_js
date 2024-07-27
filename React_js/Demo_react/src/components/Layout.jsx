import {BrowserRouter ,Routes , Route } from 'react-router-dom'
import About from './About'
import Context from './Context'
import Shop from './Shop'
import React from 'react'

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/contact" element={<Context/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
