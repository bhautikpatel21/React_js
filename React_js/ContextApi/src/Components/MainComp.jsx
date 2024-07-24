import React from 'react'
import ComponentA from './ComponentA'
import { createContext } from 'react'

/* ContextAPI , useContext() , Provider And Consumer */

export const data = createContext()
export const data1 = createContext()

const MainComp = () => {

  let firstName = 'Bhautik'
  let gender = 'Male'

  return (
    <div>
      <h1 className='heading'>This is MainCom</h1>
      <data.Provider value={firstName}>
        <data1.Provider value={gender}>
          <ComponentA />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default MainComp