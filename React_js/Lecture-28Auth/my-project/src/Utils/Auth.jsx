import React from 'react'
import { useState, createContext, useContext } from 'react'

export const AuthContext = createContext(null)

const Auth = ({children}) => {

    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <div>
            <AuthContext.Provider value={{user , login , logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default Auth


export const UseAuth = () => {
    return useContext(AuthContext)
}