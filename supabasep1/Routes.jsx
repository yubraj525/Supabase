import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import LoginPage from './src/pages/LoginPage.jsx'
import HomePage from './src/pages/HomePage.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
       {
        path: '/login',
        element: <LoginPage />
    }

])
const Routes = () => {
    return (
        <RouterProvider router={router} >{
            Children
        }
      </RouterProvider>
    )
}




export default Routes