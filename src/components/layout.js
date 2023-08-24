import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-tr from-indigo-50 to-white w-full relative text-neutral-900">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
