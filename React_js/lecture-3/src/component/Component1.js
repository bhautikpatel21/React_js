import React from 'react'
import logo from "../assets/google.webp"

const header = () => {
  return (
    <div>
   <header className='w-full h-[120px] flex border-4'>

   <div className='w-[40%] flex items-center p-8'>
   <img className='w-24 h-24 rounded-full border' src={logo} alt="not found." />
   <h1 className='font-medium ml-5 text-[20px]'>GOOGLE</h1>
   </div>

   <div className='w-[60%] flex items-center justify-around font-bold text-[20px]'>
   <a href="">HOME</a>
   <a href="">ABOUT US</a>
   <a href="">OUR PRODUCTS</a>
   <a href="">CAREERS</a>
   <a href="">CONTACT US</a>
   </div>

   </header>
    </div>
  )
}

export default header
