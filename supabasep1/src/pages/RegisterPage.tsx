import React from 'react'
import { Link } from 'react-router-dom';
import { supabase } from '../Config/CreateClient';

const RegisterPage = () => {
      const [userData, setUserData] = React.useState({
        fullName: '',
        email: '',
        password: '',
        Confirmpassword:''
      })
      const handleChange = (e) => {
        e.preventDefault();
        const
          { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value
        })
      }
        async function handleRegister(e) {
          e.preventDefault();
        if(userData.fullName==='' || userData.email==='' || userData.password==='' || userData.Confirmpassword===''){
          alert("Please fill in all fields");
          return;
        }
        if(userData.password !== userData.Confirmpassword){
          alert("Passwords do not match");
          return;
        }
        const { data, error } = await supabase.auth.signUp({
          email: userData.email,
          password: userData.password,
        });
        if (error) {
          alert("Error: " + error.message);
        } else {
          alert("Registration successful! ");
          console.log("User data:", data.user);
        }
      }
  return (
 <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
        </h2>

        {/* Form */}
        <form className="space-y-4">
                   <div>
            <label htmlFor="fullName" className="block text-gray-600 font-medium">
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="fullName"
              name='fullName'
              value={userData.fullName}
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name='email'
              value={userData.email}
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
              name='password'
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">
                Confirm Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="Confirmpassword"
              name='Confirmpassword'
              placeholder="Confirm your password"

              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={(e) => { handleRegister(e);}}>
            Register
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to={'/login'} className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
