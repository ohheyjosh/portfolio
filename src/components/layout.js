import React from "react"

import Main from "./main"
import Footer from "./footer"
import "./layout.css"

const Layout = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
