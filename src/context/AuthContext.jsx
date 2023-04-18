import React, { createContext } from 'react'

export const AuthContext = React.createContext({
    user:null,
    setUser: () => {},
})

