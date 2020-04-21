import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import Main from "./main"
import Footer from "./footer"
import "./layout.css"

const Layout = () => {
  return (
    <div className="relative overflow-hidden">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              role="checkbox"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
