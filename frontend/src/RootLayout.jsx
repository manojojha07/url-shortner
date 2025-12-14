import React from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './Components/LoginForm'
import AuthPage from './pages/AuthPage'
import Navbar from './Components/Navbar'
import { Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <>
    <Navbar />
   <Outlet />
    </>
  )
}

export default RootLayout