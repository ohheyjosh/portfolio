import React from "react"
import Img from "gatsby-image"

import ProjectLayout from "../../components/project"
import SEO from "../../components/seo"

const CallThemForMePage = props => (
  <div>
    <SEO title="CallThemForMe, by Josh Barnett" />
    <ProjectLayout>
      <h1>CallThemForMe.</h1>
      <p>
        CallThemForMe connects busy, tired, or anxious people with businesses
        that run on the phone. If you can't pick up the phone, or just don't
        want to, let them know and they'll call them for you. With clear
        pricing, one-step requests, and a free trial call for everyone, there is
        no excuse to keep anyone waiting for that phone call.
      </p>
      <p>
        Inspired by my wife, who suffers from social anxiety that makes picking
        up the phone difficult, I spent a month strategizing, designing, and
        implementing a simple service for people that need a new way to
        communicate with businesses that run primarily through phone calls.
      </p>
      <Img
        fluid={props.data.ctfmLiveLander.childImageSharp.fluid}
        alt="CallThemForMe landing page"
      />
      <Img
        fluid={props.data.ctfmRequestFlow.childImageSharp.fluid}
        alt="CallThemForMe request flow"
      />
      <Img
        fluid={props.data.ctfmMobilePrototype.childImageSharp.fluid}
        alt="CallThemForMe mobile prototype"
      />
      <Img
        fluid={props.data.ctfmLiveRequest.childImageSharp.fluid}
        alt="CallThemForMe live request view"
      />
      <Img
        fluid={props.data.ctfmLiveNew.childImageSharp.fluid}
        alt="CallThemForMe live request form"
      />
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
