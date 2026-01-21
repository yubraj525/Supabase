import React, { useContext } from 'react'
import AuthContext, { useAuth } from '../Context/AuthContext'

const PrivateRoute = ({children}: {children: React.ReactNode}) => {
    const context=useAuth();
 if(context?.user){
    return (
        <>
        {children}
        </>
    )
 } else {
    return (
        <div>
            Please login to access this page.
        </div>
    )
 }
}

export default PrivateRoute
