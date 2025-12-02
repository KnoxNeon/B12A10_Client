import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
      <Outlet />
      </main>
      <Footer />
      <div className="h-0 md:h-10 lg:h-0"></div>
    </div>
  </>
}

export default MainLayout