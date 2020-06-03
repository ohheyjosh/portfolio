import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const DarkModeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className="toggle-switch absolute top-6 right-6 lg:top-14">
        <label className="bg-gray-800 relative inline-block flex-shrink-0 h-12 w-24 lg:h-8 lg:w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none overflow-hidden">
          <input
            id="darkModeToggle"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            aria-checked={theme === "dark" ? true : false}
            tabIndex="0"
          />
          <span
            aria-hidden="true"
            className="translate-x-0 inline-block h-10 w-10 lg:h-6 lg:w-6 rounded-full bg-white shadow transform transition ease-in-out duration-200"
          />
        </label>
      </div>
    )}
  </ThemeToggler>
)

export default DarkModeToggle
