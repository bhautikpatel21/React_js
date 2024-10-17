import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  const data = useSelector(state => state.wishlist)

  console.log('wishData' , data);
  

  return (
    <div>
      <h1 className='heading'>This is Wishlist Page</h1>
    </div>
  )
}

export default Wishlist
