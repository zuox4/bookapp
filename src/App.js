import React from 'react'
import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import Header from './components/Header';
export const AuthContext = createContext()
export const UserId = createContext()
const App = () => {
    const [userId, setUserId] = useState(null)
    
    return (
        
    <AuthContext.Provider value={setUserId}>
        <UserId.Provider value={userId}>
            <Outlet />
        </UserId.Provider>
    </AuthContext.Provider>

    )
}

export default App