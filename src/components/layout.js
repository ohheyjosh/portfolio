import React from "react"

import DarkModeToggle from "./dark-mode-toggle"
import Main from "./main"
import ProjectList from "./project-list"
import Footer from "./footer"

const Layout = () => {
  return (
    <div className="relative overflow-hidden">
      <DarkModeToggle />
      <Main />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default Layout
