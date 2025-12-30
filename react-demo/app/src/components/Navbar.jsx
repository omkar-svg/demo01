import React from 'react'
import { Link, useNavigate } from 'react-router'
function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className=" mx-auto mt-2 w-[90%] max-w-full">
        <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md px-8 py-4 shadow-lg bg-linear-to-r from-white to-blue-500">


          <div className="flex items-center gap-2 text-xl font-semibold text-blue-600">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              🏠
            </div>
            Skill Katta
          </div>


          <div className="flex items-center gap-6">

            <Link to="/" className="text-black hover:text-blue-800 text-xl">Home</Link>

            <div className="relative group">
              <span className="cursor-pointer text-black hover:text-blue-800 text-xl flex items-center gap-1">
                Courses
                <span className="text-sm">▾</span>
              </span>

              <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white shadow-lg 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200">

                <Link to="/my-courses" className="block px-4 py-2 hover:bg-blue-100">My Courses</Link>
                <Link to="/courses" className="block px-4 py-2 hover:bg-blue-100"> All Courses</Link>
              </div>

            </div>
            <Link to="/about" className="text-black hover:text-blue-800 text-xl">About Us</Link>
            <Link to="/contact" className="text-black hover:text-blue-800 text-xl">Contact Us</Link>
          </div>
          <div class="flex items-center gap-3">
            <button class="rounded-full bg-green-500 px-5 py-2 text-white hover:bg-green-600" onClick={() => navigate('/login')}>
              Login
            </button>
             <button class="rounded-full bg-green-500 px-5 py-2 text-white hover:bg-green-600" onClick={() => navigate('/login')}>
              profile
            </button>
          </div>
          

        </div>
      </nav>
    </div>
  )
}

export default Navbar
