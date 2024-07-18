import React from 'react'
import Tea from '../assets/tea.jpg'
import { useState } from 'react'

const Conditional1 = () => {
  return (
    <div className='h-full bg-slate-200 w-[50%] flex flex-col items-center justify-center border-b-4 border-r-4 border-black'>

        {/* Tea Image */}
        <div className='w-64 h-64 rounded-full bg-blue-500 flex justify-center items-center overflow-hidden -mt-10 border-b-4 hover:scale-110 hover:duration-150'>
            <img className='w-64 h-72 object-cover ' src={Tea} alt="not found" />
        </div><br/>
            <h1 className='text-[50px] font-bold '>TEA</h1>
            <h1 className='text-[50px] font-bold'>RECIPES</h1>
            <button className='border mt-5 border-black w-32 font-semibold h-10 bg-yellow-300 '>recipes</button>
    </div>
  )
}

export default Conditional1
