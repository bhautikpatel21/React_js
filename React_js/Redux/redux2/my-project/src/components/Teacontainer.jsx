import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_tea } from '../redux/Index'

const TeaContainer = () => {

    const numOfteas = useSelector(state => state.numOftea)


    console.log(numOfteas);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1>NumOfteas:{numOfteas}</h1>
      <button onClick={() => dispatch(buy_tea())}>Cake Decrement</button>
    </div>
  )
}

export default TeaContainer
