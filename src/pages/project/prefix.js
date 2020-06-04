import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ProjectLayout from "../../components/project"
import SEO from "../../components/seo"

const PrefixPage = props => (
  <div>
    <SEO title="_prefix, by Josh Barnett" />
    <ProjectLayout>
      <article>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-2/5 lg:px-4">
            <h1>_prefix</h1>
            <p>
              _prefix is a Markdown-powered notebook for developers. Jot down
              notes, code snippets, and documentation. Sync your work to the
              cloud and pick it up again on any desktop or mobile device. Change
              colors to match your style, and get more done with JavaScript
              extensions.
            </p>
            <p>
              Despite years spent working with Evernote, Jira, Google Drive, and
              other collaborative note-taking solution, I have yet to find a
              simple note and snippet tool that's dedicated to improving the
              collaborative developer experience. _prefix was my attempt at
              solving that.
            </p>
          </div>
          <div className="mx-auto w-full py-2 lg:w-3/5">
            <Img
              fluid={props.data.prefixBranding.childImageSharp.fluid}
              alt="_prefix branding"
            />
            <aside className="my-2 text-center">_prefix branding.</aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-1/2">
            <Img
              fluid={props.data.prefixLander.childImageSharp.fluid}
              alt="_prefix beta lander"
            />
            <aside className="my-2 text-center">Beta landing page.</aside>
          </div>
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:px-4">
            <h2>Challenges:</h2>
            <ul className="list-disc">
              <li>
                Too many "developer experience" tools are cumbersome and get in
                the way of the development flow. Many of them solve real
                problems but take too long to use. Dev teams should be able to
                jot down project notes, code snippets, and documentation quickly
                enough to not interrupt what they're actually working on.
              </li>
              <li>
                Many note-sharing tools like Evernote have inconsistent
                formatting between different devices and platforms. Rich-text
                editors make the matter worse by creating unexpected behavior
                when pasting in text or code from various sources.
              </li>
              <li>
                Whenever possible, developer tools should always act as a
                platform for customization and extendability. Developers know
                what problems they need to solve &mdash; it's up to platform
                owners to provide them the tools to solve those problems and
                otherwise stay out of the way.
              </li>
            </ul>
            <h2>Solutions:</h2>
            <ul className="list-disc">
              <li>
                We used Markdown to ensure quick, simple, and consistent
                formatting of all types of documents. Whether a user is working
                with light notes, code snippets, or rich documentation, they can
                use visual tools or quickly typed markup to format the document.
                With a realtime database sync, changes are instantly mirrored to
                the cloud and available to collaborators.
              </li>
              <li>
                By using Markdown and a unified format view, both the markup and
                the formatted results are visible in the same way to all
                versions of _prefix, whether on Mac, Windows, or mobile devices.
                Even syncing documents to and from other platforms like GitHub
                Pages, Gists, Trello, and BitBucket Server provides a consistent
                format, since Markdown is largely handled the same way in all of
                those environments.
              </li>
              <li>
                By building _prefix as an API-driven JavaScript application,
                opportunities for extendability are present from Day One.
                Developers can extend _prefix using JavaScript-based plugins,
                CSS customization, and external webhooks that communicate with
                the API to retrieve document content and change history.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2">
            <Img
              fluid={props.data.prefixConcept.childImageSharp.fluid}
              alt="Beta UI concept"
            />
            <aside className="my-2 text-center">
              Initial user interface concept.
            </aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2 lg:w-1/3 lg:mr-4 xl:w-1/4">
            <h2>My roles:</h2>
            <ul className="list-disc">
              <li>Product designer</li>
              <li>UI/UX designer</li>
            </ul>
          </div>
          <div className="mx-auto w-full py-2 lg:w-2/3 lg:ml-4 xl:w-1/2">
            <h2>Tools used:</h2>
            <ul className="list-disc">
              <li>Photoshop (high-fidelity prototype / branding)</li>
              <li>Sketch (high-fidelity interactive prototype)</li>
              <li>Balsamiq (low-fidelity interactive prototypes)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2 lg:w-2/3">
            <h2 className="text-center">And then what happened?</h2>
            <p>
              As I began making progress into the MVP codebase (which was going
              to involve Vue.js, Firebase, and some Markdown-parsing goodies), I
              happened upon a couple fairly new apps called{" "}
              <a
                href="https://bear.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Bear
              </a>{" "}
              and{" "}
              <a
                href="https://www.notion.so"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Notion
              </a>
              .
            </p>
            <p>
              While not a perfect substitute for _prefix, Bear came close enough
              to fitting the same needs that I no longer felt a strong market
              gap existed for _prefix to fill. When stronger team collaboration
              and internal documentation is needed, I now recommend Notion.
            </p>
          </div>
        </div>
      </article>
    </ProjectLayout>
  </div>
)

export default PrefixPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    prefixBranding: file(
      relativePath: { eq: "project/prefix/prefix-branding.png" }
    ) {
      ...fluidImage
    }
    prefixConcept: file(
      relativePath: { eq: "project/prefix/prefix-concept.png" }
    ) {
      ...fluidImage
    }
    prefixLander: file(
      relativePath: { eq: "project/prefix/prefix-lander.png" }
    ) {
      ...fluidImage
    }
  }
`
