import React from 'react'
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { Link, graphql } from 'gatsby'
import Layout from "../layouts/default"
import "../styles/normalize.module.css"

export default function Article({ data: { mdx } }) {
    return(
    <Layout>
        <div class="mx-4 sm:mx-auto sm:max-w-2xl">
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>{mdx.body}</MDXRenderer>
            <br />
            <hr />
            <div class="my-3 flex space-x-6 justify-end font-gray-600 text-sm font-light">
                <h3>{mdx.frontmatter.author}</h3>
                <h4>{mdx.frontmatter.date}</h4>
            </div>
            <p class="text-blue-500 text-lg font-light"><Link to="/blog/">Go back</Link></p>
        </div>
      </Layout>
    )
}

export const pageQuery = graphql`
    query Blog($slug: String) {
        mdx(fields: {slug: { eq: $slug } }) {
            body
            fields {
                slug
              }
            frontmatter {
                title
                author
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`