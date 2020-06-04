import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ProjectLayout from "../../components/project"
import SEO from "../../components/seo"

const CallThemForMePage = props => (
  <div>
    <SEO title="CallThemForMe, by Josh Barnett" />
    <ProjectLayout>
      <article>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-2/5 lg:px-4">
            <h1>CallThemForMe.</h1>
            <p>
              CallThemForMe connects busy, tired, or anxious people with
              businesses that run on the phone. If you can't pick up the phone,
              or just don't want to, let them know and they'll call them for
              you. With clear pricing, one-step requests, and a free trial call
              for everyone, there is no excuse to keep anyone waiting for that
              phone call.
            </p>
            <p>
              Inspired by my wife, who suffers from social anxiety that makes
              picking up the phone difficult, I spent a month strategizing,
              designing, and implementing a simple service for people that need
              a new way to communicate with businesses that run primarily
              through phone calls.
            </p>
          </div>
          <div className="mx-auto w-full py-2 lg:w-3/5">
            <Img
              fluid={props.data.ctfmLiveLander.childImageSharp.fluid}
              alt="CallThemForMe landing page"
              className="shadow-lg"
            />
            <aside className="my-2 text-center">
              Landing page with animated hero.
            </aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-1/2">
            <Img
              fluid={props.data.ctfmRequestFlow.childImageSharp.fluid}
              alt="CallThemForMe request flow"
              className="shadow-lg"
            />
            <aside className="my-2 text-center">Call request flow.</aside>
          </div>
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:px-4">
            <h2>Challenges:</h2>
            <ul className="list-disc">
              <li>
                Authentication, both for initial signup and for logging in
                later, needed to be completely frictionless. Usernames and
                passwords, while common nowadays, present opportunities for
                friction and bounce that could be avoided.
              </li>
              <li>
                The request flow needed to be as short and sweet for users as
                possible. In order to be easier than picking up the phone, the
                entire request flow can't involve more than a single form and a
                couple of clicks.
              </li>
              <li>
                Despite an emphasis on simplicity, a communication avenue must
                still exist if more information is needed to complete a call
                request.
              </li>
            </ul>
            <h2>Solutions:</h2>
            <ul className="list-disc">
              <li>
                We used Auth0's passwordless authentication flow to eliminate
                the need for usernames and passwords. Instead, the user enters a
                phone number and Twilio sends a one-time signin code that's
                submitted for login. On iOS and desktop Safari browsers, this
                can be done without any typing.
              </li>
              <li>
                After some user testing and iteration, we reduced the call
                request form to one page with three fields and only two
                clicks/taps to submit. Everything is required but clearly
                labeled and visible.
              </li>
              <li>
                Thanks to a phone-centric authentication method, every account
                has a phone number that can be reached by call or text in case
                additional info is needed. If the user provides an email
                address, we can use that instead. This eliminates the need for
                push notifications or returns to the dashboard to answer simple
                questions.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2">
            <Img
              fluid={props.data.ctfmMobilePrototype.childImageSharp.fluid}
              alt="CallThemForMe mobile prototype"
              className="shadow-lg"
            />
            <aside className="my-2 text-center">
              Mobile prototype screens.
            </aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2 lg:w-1/3 lg:mr-4 xl:w-1/4">
            <h2>My roles:</h2>
            <ul className="list-disc">
              <li>Product designer</li>
              <li>UI/UX designer</li>
              <li>Full-stack developer</li>
              <li>System administrator</li>
            </ul>
          </div>
          <div className="mx-auto w-full py-2 lg:w-2/3 lg:ml-4 xl:w-1/2">
            <h2>Tools used:</h2>
            <ul className="list-disc">
              <li>Auth0 (Hosted authentication solution)</li>
              <li>GraphQL (Simple universal data querying)</li>
              <li>Next.js, hosted by Render ("Serverless" hosting solution)</li>
              <li>
                PostgreSQL, hosted by Render (Connected to GraphQL via Hasura)
              </li>
              <li>TailwindCSS (Utility-based CSS framework)</li>
              <li>Twilio (SMS messaging solution)</li>
              <li>Zapier (no-code connection to Zendesk API)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:mr-4">
            <Img
              fluid={props.data.ctfmLiveRequest.childImageSharp.fluid}
              alt="CallThemForMe live request view"
              className="shadow-lg"
            />
            <aside className="my-2 text-center">Live call request view.</aside>
          </div>
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:ml-4">
            <Img
              fluid={props.data.ctfmLiveNew.childImageSharp.fluid}
              alt="CallThemForMe live request form"
              className="shadow-lg"
            />
            <aside className="my-2 text-center">Live call request form.</aside>
          </div>
        </div>
      </article>
    </ProjectLayout>
  </div>
)

export default CallThemForMePage

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
    ctfmLiveLander: file(
      relativePath: { eq: "project/callthemforme/ctfm-live-lander.png" }
    ) {
      ...fluidImage
    }
    ctfmRequestFlow: file(
      relativePath: { eq: "project/callthemforme/ctfm-request-flow.png" }
    ) {
      ...fluidImage
    }
    ctfmMobilePrototype: file(
      relativePath: { eq: "project/callthemforme/ctfm-mobile-prototype.png" }
    ) {
      ...fluidImage
    }
    ctfmLiveRequest: file(
      relativePath: { eq: "project/callthemforme/ctfm-live-request.png" }
    ) {
      ...fluidImage
    }
    ctfmLiveNew: file(
      relativePath: { eq: "project/callthemforme/ctfm-live-new.png" }
    ) {
      ...fluidImage
    }
  }
`
