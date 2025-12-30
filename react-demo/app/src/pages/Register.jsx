import React from 'react'
import { useState } from 'react';
import { loginuser } from '../services/userservices';
import { toast } from 'react-toastify'
import { Link } from 'react-router';
import Login from './Login';  

function Register() {
    const [name,setname] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPassword] = useState("")
    const [moblie_no,setmobileno] = useState("")
    
  return (
    <div>
  
       <div className="mx-auto mt-12 w-full max-w-lg p-6  border border-gray-300 rounded-lg shadow-lg min-h-[500px]">
                <h1 className="text-center text-5xl text-black h-[80px] p-2 text-bold ">Register </h1>
                <div className=" mx-auto mt-5 flex flex-col gap-1 w-full max-w-sm">
                    <label className="text-lg font-small text-gray-700" >
                        Enter Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter name"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={event => setname(event.target.value)}
                    />
                </div>
                <div className=" mx-auto mt-4 flex flex-col gap-1 w-full max-w-sm">
                    <label className="text-lg font-small text-gray-700">
                        Enter email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " onChange={event => setEmail(event.target.value)}
                    />
                </div>
                 <div className=" mx-auto mt-4 flex flex-col gap-1 w-full max-w-sm">
                    <label className="text-lg font-small text-gray-700">
                        Enter Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " onChange={event => setPassword(event.target.value)}
                    />
                </div>
                 <div className=" mx-auto mt-4 flex flex-col gap-1 w-full max-w-sm">
                    <label className="text-lg font-small text-gray-700">
                        Enter mobile No
                    </label>

                    <input
                        type="text"
                        placeholder="Enter moblie no"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " onChange={event => setmobileno(event.target.value)}
                    />
                </div>

                <div>
                    <button className="ml-[40px] mt-10 w-full max-w-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors" onClick={() => handlregister(name,email, pass,moblie_no)}>
                        Register
                    </button>
                    <li className='ml-24'>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Click here
                        </Link>
                    </li>
                </div>

            </div>
    </div>
  )
}

export default Register