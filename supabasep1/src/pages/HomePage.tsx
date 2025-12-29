import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
<div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <ul className="flex space-x-6">
        <Link to={'/login'} >
        <li className="hover:text-gray-400">Login</li>
        </Link>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex-1  flex flex-col justify-center items-center text-center bg-blue-100 px-6"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Website</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          This is a simple hero section with a background color. You can add
          images, buttons, or anything you like here.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage