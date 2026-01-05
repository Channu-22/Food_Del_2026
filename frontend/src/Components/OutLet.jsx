import React from 'react'
import NavBar from './NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import {Outlet} from "react-router-dom"

function OutLet() {
  return (
   <>
    <NavBar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default OutLet