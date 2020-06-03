import React from "react"
import { Link } from "gatsby"

import DarkModeToggle from "./dark-mode-toggle"
import josh from "../images/josh.jpg"
import Footer from "./footer"

const ProjectLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <DarkModeToggle />
      <Link to="/">
        <img
          src={josh}
          alt="Josh Barnett"
          className="inline-flex mt-3 ml-3 w-16 h-16 border-2 shadow-md rounded-full border-solid border-white lg:mt-6 lg:ml-6 lg:w-24 lg:h-24 lg:border-4 lg:shadow-lg"
        />
      </Link>
      <main className="max-w-screen-xl mx-auto mb-32 py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default ProjectLayout
