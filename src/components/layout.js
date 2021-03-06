/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <nav>{data.site.siteMetadata.description}</nav> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div class="leftBox">{children}</div>
          <div class="rightBox">
            <div class="r_topBox">
              <div>
                <a href="https://twitter.com/log__jp">
                  <Image />
                </a>
              </div>
            </div>
            <div class="r_underBox">
              <p>
                <a href="https://twitter.com/log__jp">@Log__jp</a>
              </p>
              <p>Philosophy/Programming/Hypnosis</p>
            </div>
          </div>
        </main>
        <footer>
          © {new Date().getFullYear()}, @Log__jp All rights reserved.
          {` `}
          <a href="https://www.gatsbyjs.org">Built with Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
