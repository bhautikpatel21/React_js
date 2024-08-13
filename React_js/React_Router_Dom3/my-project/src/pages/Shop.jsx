import React from 'react'
import { Outlet , useNavigate } from 'react-router-dom'

const Shop = () => {

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1 className='heading'>This is Shop Page</h1>
      <NavLink to='newproduct'>
        <button>Click For New Product</button>
      </NavLink>
      <NavLink to='oldproduct'>
        <button>Click For Old Product</button>
      </NavLink>
      <Outlet/> */}



      <h1 className='heading'>This is Shop Page</h1>
        <button onClick={() => navigate('newproduct')} className='btn'>Click For New Product</button>
        <button onClick={() => navigate('oldproduct')} className='btn'>Click For Old Product</button>
        <Outlet/>
    </div>
  )
}

export default Shop
