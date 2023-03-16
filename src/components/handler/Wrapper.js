import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../commont/Footer'
import Navbar from '../commont/navbar/Navbar'

export default function Wrapper() {
  return (
    <>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
       <Footer/>
    </>
  )
}
