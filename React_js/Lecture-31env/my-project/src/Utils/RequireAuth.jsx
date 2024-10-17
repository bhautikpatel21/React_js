import { UseAuth } from "./Auth";
import React from 'react'
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {

    const auth = UseAuth()

    if(!auth.user){
        return <Navigate to='./login'></Navigate>
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default RequireAuth
