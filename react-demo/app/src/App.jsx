import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
       <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<Login />} />
    </Routes>

    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
