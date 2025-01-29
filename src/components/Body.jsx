import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar';

const Body = () => {
  return (
    <>
    <Navbar />
    <div className='flex'>
        
        <Sidebar />
        <Outlet />
      </div>
      </>
  )
}

export default Body
