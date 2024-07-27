import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ListRendering = () => {

    const [productData, setProductData] = useState([]);

    const Product = [
        {
            id: 1,
            name: 'firebolt',
            price: 1000,
            dis: '10%',
            color: 'black',
            catagories: 'watch',
          },
          {
            id: 2,
            name: 'firebolt-fire',
            price: 10000,
            dis: '50%',
            color: 'black',
            catagories: 'watch',
          },
          {
            id: 3,
            name: 'samsung',
            price: 20000,
            dis: '10%',
            color: 'magicgray',
            catagories: 'watch',
          },
          {
            id: 4,
            name: 'xiomi',
            price: 10000,
            dis: '10%',
            color: 'white',
            catagories: 'mobile',
          },
          {
            id: 5,
            name: 'iphone15',
            price: 100000,
            dis: '10%',
            color: 'magicgreen',
            catagories: 'mobile',
          },
          {
            id: 6,
            name: 'oppo',
            price: 30000,
            dis: '10%',
            color: 'red',
            catagories: 'mobile',
          },
          {
            id: 7,
            name: 'oneplus',
            price: 50000,
            dis: '10%',
            color: 'slategray',
            catagories: 'mobile',
          },
          {
            id: 8,
            name: 'vu',
            price: 10000,
            dis: '10%',
            color: 'black',
            catagories: 'television',
          },
          {
            id: 9,
            name: 'sony',
            price: 50000,
            dis: '10%',
            color: 'gold',
            catagories: 'television', 
          },
          {
            id: 10,
            name: 'bajaj',
            price: 10000,
            dis: '10%',
            color: 'black',
            catagories: 'mixer',
          }
    ]

    const productFilter = Product.filter((item) => item.catagories === 'watch')
    console.log(productFilter);

    useEffect(() => {
        setProductData(Product)
    },[])

  return (
    <div>
       <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>
       <div className='flex flex-wrap justify-between'>
        {
            productData.map((product) => {
                return (
                    <div className="w-[300px] rounded-md border" key={product.id}>
                         <div className="p-4">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {product.name}
                  </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Rs.{product.price}
                  </p>
                  <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Macbook
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Apple
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Laptop
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </div>
                </div>
                )
            })
        }

       </div>
       <h1>HEllo World</h1>
    </div>
  )
}

export default ListRendering
