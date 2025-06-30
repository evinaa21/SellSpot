import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PromoBar from './PromoBar'

const Layout = ({ children }) => {
  return (
    <>
    <PromoBar />
    <Navbar/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout