import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake } from '../redux/Index'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1>NumOfCakes:{numOfCakes}</h1>
      <button onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
    </div>
  )
}

export default CakeContainer
