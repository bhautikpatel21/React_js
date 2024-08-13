import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    // const params = useParams()

    // const userId = params.userId

    const {userId} = useParams()


  return (
    <div>
      <h1>Users Details {userId}</h1>
    </div>
  )
}

export default UserDetails
