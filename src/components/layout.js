import React from "react"

import DarkModeToggle from "./dark-mode-toggle"
import Main from "./main"
import Footer from "./footer"
import "./layout.css"

const Layout = () => {
  return (
    <div className="relative overflow-hidden">
      <DarkModeToggle />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
