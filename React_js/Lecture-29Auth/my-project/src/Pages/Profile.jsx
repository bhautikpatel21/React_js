import React from 'react'

const Profile = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className="h-full w-full">
        <img
          className="mx-auto h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-6xl'>Hi , </h1>
      </div>
    </div>
  )
}

export default Profile
