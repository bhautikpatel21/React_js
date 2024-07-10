import React from 'react'

const Templete = (props) => {
  return (
    <div className='w-full h-full flex justify-center mt-4'>

      <div className='w-64 h-96 bg-gray-300 rounded-xl hover:scale-110 hover:duration-300'>

        <div className='w-full h-64 '> <img className='rounded-t-xl h-64 w-full ' src={props.img} alt="not found" /></div>
        <div className='flex flex-col items-start pl-4'>
          <br />
          <p className='text-[15px]'>BRAND</p>
          <h1 className='text-[20px] font-bold'>Product Name</h1>
          <h1 className='font-bold'>$149</h1>
        </div>
      </div>
    </div>
  )
}

export default Templete
