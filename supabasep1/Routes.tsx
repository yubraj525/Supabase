import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import LoginPage from './src/pages/LoginPage.tsx'
import HomePage from './src/pages/HomePage.tsx'
import Test from './src/pages/Test.tsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
       {
        path: '/login',
        element: <LoginPage />
    },{
        path: '/test',
        element: <Test />
    }

])
const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}




export default Routes