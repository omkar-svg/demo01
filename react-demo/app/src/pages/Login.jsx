import React from 'react'
import { useState } from 'react';
import { loginuser } from '../services/userservices';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router';
import Register from './Register';
import { Link } from 'react-router';
import defineConfig from './../../eslint.config';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        if (!email) {
            toast.warn("Email must be entered");
            return;
        }

        if (!password) {
            toast.warn("Password must be entered");
            return;
        }

        try {
            const result = await loginuser(email, password);
            console.log(result);

            // backend sends success: true
            if (result.success === true) {
                toast.success("Login successful 🎉");
            } else {
                toast.error(result.message || "Login failed");
            }

        } catch (error) {
            if (error.response?.status === 401) {
                toast.error("Invalid email or password");
            } else {
                toast.error("Server error. Please try again later");
            }
        }
    };

    return (
        <div>
            <div className="mx-auto mt-36 w-full max-w-lg p-6  border border-gray-300 rounded-lg shadow-lg min-h-[500px]">
                <h1 className="text-center text-5xl text-black h-[80px] p-2 ">Login Page</h1>
                <div className=" mx-auto mt-5 flex flex-col gap-2 w-full max-w-sm">
                    <label className="text-lg font-medium text-gray-700" >
                        Enter Email:
                    </label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className=" mx-auto mt-4 flex flex-col gap-2 w-full max-w-sm">
                    <label className="text-lg font-medium text-gray-700">
                        Enter Password:
                    </label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " onChange={event => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <button className="ml-[40px] mt-10 w-full max-w-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors" onClick={() => handleLogin(email, password)}>
                        Login
                    </button>
                    <li className='ml-24'>
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Click here
                        </Link>
                    </li>
                </div>

            </div>
        </div>
    )
}

export default Login