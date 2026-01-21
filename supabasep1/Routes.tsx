import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import LoginPage from './src/pages/LoginPage.tsx'
import HomePage from './src/pages/HomePage.tsx'
import Test from './src/pages/Test.tsx'
import RegisterPage from './src/pages/RegisterPage.tsx'
import ForgotPassword from './src/pages/ForgotPassword.tsx'
import  EcommerceDashboard  from './src/pages/landingPage.tsx'
import PrivateRoute from './src/Layout/PrivateRoute.tsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute>

            <HomePage />
        </PrivateRoute>
    },
       {
        path: '/login',
        element: <LoginPage />
    },{
        path: '/test',
        element: <Test />
    }
    ,{
        path: '/register',
        element: <RegisterPage />
    },{
        path: '/forgot-password',
        element: <ForgotPassword />
    },{
        path: '/home',
        element: <EcommerceDashboard />
    }
])
const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}




export default Routes