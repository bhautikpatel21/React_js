import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake , buy_choco } from '../rudux/Action'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)
    const numOfChocos = useSelector(state => state.numOfChoco)

    console.log('numOfCake' , numOfCakes);
    console.log('numOfChoco' , numOfChocos);
    


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div className='flex  gap-x-9'>
      <h1>NumOfCakes:{numOfCakes}</h1>
      <h1>NumOfChocos:{numOfChocos}</h1>
      <button onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
      <button onClick={() => dispatch(buy_choco())}>Choco Decrement</button>
    </div>
  )
}

export default CakeContainer