import React from "react"

// 下記、1文追加
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>作成中</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div> */}
    <div>
      <h5>{data.allMarkdownRemark.totalCount}</h5>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
            {/* * {node.frontmatter.date} */}
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)
// 下記追加。
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
}

`
// 下記、元々
export default IndexPage
