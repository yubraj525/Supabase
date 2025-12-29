import React, { useEffect } from 'react'
import { supabase } from './CreateClient'

const LoginPage = () => {

  useEffect(() => {
    Testfetch();
  }, []);

  async function Testfetch() {
    const { data, error } = await supabase
      .from('user')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('Data fetched successfully:', data);
    }
  }


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
            onClick={(e) => { e.preventDefault(); console.log(formData);  setFormData({ email: '', password: '' })}}>
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage