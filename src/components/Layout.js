import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../CSS/layout.css'


const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout 
