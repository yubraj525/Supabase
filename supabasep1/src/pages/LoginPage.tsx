import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Authentication/Login';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
const navigate=useNavigate();



  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const
      { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  function handleLogin() {
    if(formData.email==='' || formData.password===''){
      alert("Please fill in all fields");
      return;
    }
    Login({email: formData.email, password: formData.password}).then((message) => {
      alert(message);
    });
navigate('/home');

 
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name='email'
              value={formData.email}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              value={formData.password}
              name='password'
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={(e) => {
              handleLogin();
              e.preventDefault();
            }}>
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
         <Link to={'/register'} className="text-blue-600 hover:underline">
            Register
            </Link>
        </p>
        <p className="text-center text-gray-600 mt-6">
          Forgot your password?{" "}
         <Link to={'/forgot-password'} className="text-blue-600 hover:underline">
            Reset Password
            </Link>
        </p>
      </div>
    </div>
  )
}


export default LoginPage