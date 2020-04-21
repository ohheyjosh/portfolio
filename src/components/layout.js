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
          <div>
            <input
              id="dark-mode-toggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              aria-checked={theme === 'dark' ? true : false}
              tabIndex="0"
            />
            <label
              htmlFor="dark-mode-toggle"
              className="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
            />{' '}
            <span
              aria-hidden="true"
              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
            />
          </div>
        )}
      </ThemeToggler>
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
