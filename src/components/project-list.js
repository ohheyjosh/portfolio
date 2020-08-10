import React from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"

import ctfmLogo from "../images/project/callthemforme/ctfm-logo.svg"
import prefixLogo from "../images/project/prefix/prefix-logo.svg"
import skulabsLogo from "../images/project/skulabs/skulabs-logo.svg"

const ProjectList = () => (
  <Location>
    {/* Wait until location data is available */}
    {({ location }) => (
      <div
        id="projectList"
        className="max-w-screen-xl mx-auto sm:mb-12 lg:mb-24 py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2 className="mx-auto text-center text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
          {location.pathname.includes("project")
            ? "Some other recent projects:"
            : "Some of my recent projects:"}
        </h2>
        <div
          className={
            (location.pathname.includes("project")
              ? "md:grid-cols-2"
              : "md:grid-cols-3") + " mt-6 grid grid-cols-1 gap-0.5 lg:mt-8"
          }
        >
          {!location.pathname.includes("callthemforme") && (
            <div className="col-span-1 flex justify-center py-8 px-8">
              <Link
                to="project/callthemforme"
                className="flex items-center justify-center p-8 rounded-lg shadow-lg w-full hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 focus:outline-none focus:shadow-outline transition"
                style={{ backgroundColor: "#e1f2fe" }}
              >
                <img
                  className="max-h-8 mb-0"
                  src={ctfmLogo}
                  alt="CallThemForMe."
                />
              </Link>
            </div>
          )}
          {!location.pathname.includes("skulabs") && (
            <div className="col-span-1 flex justify-center py-8 px-8">
              <Link
                to="project/skulabs"
                className="flex items-center justify-center p-8 rounded-lg shadow-lg w-full hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 focus:outline-none focus:shadow-outline transition"
                style={{ backgroundColor: "#fafafa" }}
              >
                <img className="max-h-8 mb-0" src={skulabsLogo} alt="SKULabs" />
              </Link>
            </div>
          )}
          {!location.pathname.includes("prefix") && (
            <div className="col-span-1 flex justify-center py-8 px-8">
              <Link
                to="project/prefix"
                className="flex items-center justify-center p-8 rounded-lg shadow-lg w-full hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 focus:outline-none focus:shadow-outline transition"
                style={{ backgroundColor: "#ffeb3b" }}
              >
                <img className="max-h-8 mb-0" src={prefixLogo} alt="_prefix" />
              </Link>
            </div>
          )}
        </div>
      </div>
    )}
  </Location>
)

export default ProjectList
