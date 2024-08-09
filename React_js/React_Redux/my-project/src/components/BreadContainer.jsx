import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_Bread } from '../redux/Index'

const BreadContainer = () => {

    const numOfBread = useSelector(state => state.numOfBread)


    console.log(numOfBread);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1>NumOfBread:{numOfBread}</h1>
      <button onClick={() => dispatch(buy_Bread())}>Bread Decrement</button>
    </div>
  )
}

export default BreadContainer
