import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake , buy_choco } from '../redux/Action'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)
    const numOfChocos = useSelector(state => state.numOfChoco)

    console.log('numOfCake' , numOfCakes);
    console.log('numOfChoco' , numOfChocos);
    


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1 className='bg-amber-500 text-center'>NumOfCakes:{numOfCakes}</h1>
      <h1 className='bg-amber-500 text-center'>NumOfChocos:{numOfChocos}</h1>
      <button className='bg-amber-400 ml-[505px]' onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
      <br/>
      <button className='bg-amber-400 ml-[500px]' onClick={() => dispatch(buy_choco())}>Choco Decrement</button>
    </div>
  )
}

export default CakeContainer
