import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ProjectLayout from "../../components/project"
import SEO from "../../components/seo"

const SKULabsPage = props => (
  <div>
    <SEO title="SKULabs, by Josh Barnett" />
    <ProjectLayout>
      <article>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-2/5 lg:px-4">
            <h1>SKULabs</h1>
            <p>
              SKULabs is an all-in-one inventory management and order
              fulfillment solution for ecommerce warehouse teams. With SKULabs,
              warehouse teams can pick, pack, and ship orders all in one place,
              and stock changes sync to online sales channels in realtime.
            </p>
            <p>
              As a bootstrapped software-as-a-service, the cofounders and I wore
              a lot of hats to get the ball rolling and secure a solid
              foundation. As we did, we uncovered a lot of inherent issues with
              existing solutions and came up with some unique approaches to
              solve them.
            </p>
          </div>
          <div className="mx-auto w-full py-2 lg:w-3/5">
            <Img
              fluid={props.data.SKULabsCatalog.childImageSharp.fluid}
              alt="SKULabs catalog page"
            />
            <aside className="my-2 text-center">Catalog page.</aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-1/2">
            <Img
              fluid={props.data.SKULabsSetup.childImageSharp.fluid}
              alt="SKULabs setup page"
            />
            <aside className="my-2 text-center">Guided account setup.</aside>
            <Img
              fluid={props.data.SKULabsInventory.childImageSharp.fluid}
              alt="SKULabs inventory page"
            />
            <aside className="my-2 text-center">
              Editing catalog inventory.
            </aside>
          </div>
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:px-4">
            <h2>Challenges:</h2>
            <ul className="list-disc">
              <li>
                An ERP or WMS (warehouse management system) normally takes
                months to implement. That's why competing services charge
                mandatory onboarding packages and other setup fees, in addition
                to often requiring annual contracts with up-front payment. With
                SKULabs, we wanted to offer month-to-month billing with no
                additional up-front costs, so we had to simplify the onboarding
                process so that customers saw value in the service ASAP.
              </li>
              <li>
                Non-inventory tasks, such as order picking and shipping, usually
                require that the user switch from their inventory management
                solution to a separate interface. Initially, we tried
                integrating with order management and fulfillment solutions.
                However, testing showed that an all-in-one approach would
                greatly reduce the complexity of implementing and using both
                types of software.
              </li>
              <li>
                When we asked ecommerce retailers and wholesalers where they
                wish to cut costs the most, the vast majority pointed to order
                fulfillment costs. However, they were mostly focused on the
                postage cost of parcel services provided by UPS and FedEx; they
                were usually ignoring in-house costs such as how quickly or
                accurately their team is fulfilling orders. We found that an
                average error rate of 2-5% was costing these businesses tens of
                thousands of dollars and sought a solution immediately.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mx-auto w-full py-2 lg:w-1/2">
            <h2>Solutions:</h2>
            <ul className="list-disc">
              <li>
                In order to streamline and expedite customer onboarding, I
                designed and lead the implementation of a guided setup interface
                that is presented to each new account. This step-by-step
                interface walks through the process of connecting external
                platforms like shopping carts, marketplace accounts, and
                shipping carriers, and pulling in the initial data needed from
                each integration. After implementing the guided setup, our new
                account setup time and churn were both reduced to a fraction of
                the previous averages.
              </li>
              <li>
                In a first for the industry, our team worked with direct postal
                integration providers Shippo and EasyPost to offer parcel
                shipping directly in our inventory and order management
                interface. By breaking the tasks down into separate dynamic
                modals, the design language of the interface was uninterrupted
                by new shipping features, and users were able to start shipping
                directly in SKULabs right away.
              </li>
              <li>
                After over a year of in-person interviews, prototyping and
                continued iteration, SKUlabs launched with a barcode-based item
                verification toolset that helps teams achieve 100% order picking
                accuracy. By implementing the feature directly in the order
                fulfillment interface, picking teams are able to scan and verify
                order items without switching to another piece of software or
                hardware. By ensuring that only the correct order items are
                shipped to customers every time, SKULabs has saved customers
                from immense revenue loss due to repeat shipping and customer
                churn.
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full py-2 lg:w-1/2 lg:px-4">
            <Img
              fluid={props.data.SKULabsPicking.childImageSharp.fluid}
              alt="SKULabs picking page"
            />
            <aside className="my-2 text-center">Picking line items.</aside>
            <Img
              fluid={props.data.SKULabsShipping.childImageSharp.fluid}
              alt="SKULabs shipping page"
            />
            <aside className="my-2 text-center">Multi-carrier shipping.</aside>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto w-full py-2 lg:w-1/3 lg:mr-4 xl:w-1/4">
            <h2>My roles:</h2>
            <ul className="list-disc">
              <li>Product designer</li>
              <li>UI/UX designer</li>
              <li>Frontend developer</li>
            </ul>
          </div>
          <div className="mx-auto w-full py-2 lg:w-2/3 lg:ml-4 xl:w-1/2">
            <h2>Tools used:</h2>
            <ul className="list-disc">
              <li>Bootstrap (It was big at the time)</li>
              <li>jQuery (Lightweight frontend framework)</li>
              <li>Datatables (Feature-rich tables)</li>
              <li>Mongoose (Object-oriented data modeling)</li>
            </ul>
          </div>
        </div>
      </article>
    </ProjectLayout>
  </div>
)

export default SKULabsPage

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
    SKULabsCatalog: file(
      relativePath: { eq: "project/skulabs/skulabs-catalog.png" }
    ) {
      ...fluidImage
    }
    SKULabsInventory: file(
      relativePath: { eq: "project/skulabs/skulabs-inventory.png" }
    ) {
      ...fluidImage
    }
    SKULabsPicking: file(
      relativePath: { eq: "project/skulabs/skulabs-picking.png" }
    ) {
      ...fluidImage
    }
    SKULabsSetup: file(
      relativePath: { eq: "project/skulabs/skulabs-setup.png" }
    ) {
      ...fluidImage
    }
    SKULabsShipping: file(
      relativePath: { eq: "project/skulabs/skulabs-shipping.png" }
    ) {
      ...fluidImage
    }
  }
`
