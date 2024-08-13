import React from 'react'
import { Outlet , useSearchParams } from 'react-router-dom'


const Users = () => {

    const [searchParams , setSearchParams] = useSearchParams()

    const ActiveUsers = searchParams.get('filter') === 'active'

  return (
    <div>
      <h1 className='heading'>This is Users page</h1>
      <Outlet/>
      <div>
        <button onClick={() => setSearchParams({'filter':'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>All Users</button>
      </div>
      {
        ActiveUsers ? <h1>All Active Users</h1> : <h1>All Users</h1>
      }
    </div>
  )
}

export default Users
