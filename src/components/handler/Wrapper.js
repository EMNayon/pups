import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../commont/Footer'
import Navbar from '../commont/navbar/Navbar'

export default function Wrapper() {
  return (
    <div className='h-screen'>
        <Navbar/>
        <div className='h-full'>
            <Outlet/>
        </div>
       <Footer/>
    </div>
  )
}
