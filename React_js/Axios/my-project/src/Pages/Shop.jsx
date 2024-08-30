import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Shop = () => {

  const [data , setData] = useState([])

  console.log('ShopData' , data);

  useEffect(() => {
    axios.get('http://localhost:3000/ecoproduct')
    .then((response) => {
      console.log(response)
      setData(response.data)
    })
  } , [])

  return (
    <div>
      <h1 className='vijay '>This is Shop Page</h1>
      <div className='flex flex-wrap'>

      {
        data.map((item) => {
          return(
            <>
               <div className="w-[300px] rounded-md border">
      <img
        src={item.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="mt-3 text-sm text-gray-600">
         {item.description}
        </p>
        <p>
          ${item.price}
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Shop
