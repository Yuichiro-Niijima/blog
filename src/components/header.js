import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `2rem`,
    }}
  >
    <div
      style={{
        margin: `0px auto 3em auto;`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul>
        <div
          style={{
            listStyle: "none",
            display: "flex",
          }}
        >
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Web</li>
          <li>Hypnosis</li>
          <li>Others</li>
        </div>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
