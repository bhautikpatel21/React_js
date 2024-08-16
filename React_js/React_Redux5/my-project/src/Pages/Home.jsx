import React from 'react'
import { useSelector  , useDispatch } from 'react-redux'
import { add_cart , remove_cart  , empty_cart } from '../redux/reduxCart/CartAction'

const Home = () => {

  const productData = useSelector((state => state.cart))

  console.log('HomeData' , productData);

  const dispatch = useDispatch()

  const product = {
    name:'iphone',
    color:'black',
    price:'60000',
  }

  return (
    <div>
      <h1>This is Home Page</h1>
      <button className='btn' onClick={() => dispatch(add_cart(product))}>addToCart</button>
      <button className='btn' onClick={() => dispatch(remove_cart(product))}>removeToCart</button>
      <button className='btn' onClick={() => dispatch(empty_cart())}>emptyCart</button>
    </div>
  )
}

export default Home
