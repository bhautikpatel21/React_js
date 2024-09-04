import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ListRendering = () => {

    const [ProductData, setProductData] = useState([]);

    const product = [
        {
            id : 1,
            name : 'john',
            age : 46
        },
        {
            id : 2,
            name : 'does',
            age : 23
        },
        {
            id : 3,
            name : 'kelly',
            age : 27
        },
        {
            id : 4,
            name : 'menth',
            age : 31
        },
        {
            id : 5,
            name : 'meggy',
            age : 71
        },
    ]

    useEffect(() => {
        setProductData(product);
    })
  return (
    <>
    <div>
        <h1>This is ListRendering</h1>
        <div className='w-full h-lvh bg-yellow-200 flex flex-wrap justify-center'>
            {
                ProductData.map((product) => {
                    return(
                        <>
                        <div className='w-[50px] h-[240px] bg-blue-600'>
                            <h1>id : {product.id}</h1>
                            <h1>name : {product.name}</h1>
                            <h1>age : {product.age  }</h1>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default ListRendering
