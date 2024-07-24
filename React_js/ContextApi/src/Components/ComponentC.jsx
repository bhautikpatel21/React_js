import React from 'react'
import { data, data1 } from './MainComp'
import { useContext } from 'react'

const ComponentC = () => {

  let firstName = useContext(data)
  let Gender = useContext(data1)

  return (
    <div>
      <h1 className='heading'>My Name is {firstName} and My Gender is {Gender}</h1>
      {/* <data.Consumer>
        {
          (name) => {
            return (
              <>
                <data1.Consumer>
                  {
                    (gender) => {
                      return (
                        <>
                          <h1 className='heading'>This is Components C {name} {gender}</h1>
                        </>
                      )
                    }
                  }
                </data1.Consumer>
              </>
            )
          }
        }
      </data.Consumer> */}
    </div>
  )
}

export default ComponentC