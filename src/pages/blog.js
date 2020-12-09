import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../layouts/default"
import Meta from "../components/meta"

class BlogIndex extends React.Component {
    render() {
      const { data } = this.props
      const posts = data.allMdx.edges
  
      return (
        <Layout>
            <Meta title="Blog" desc="ブログ一覧" />
            <div class="container mx-auto px-4 mb-3">
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                <div class="p-3 mb-3 border-b border-gray-400" key={node.fields.slug}>
                    <h3 class="text-2xl text-blue-500"><Link to={node.fields.slug}>{title}</Link></h3>
                    <div>
                        <p>{node.excerpt}</p>
                        <p class="pt-3 text-xs font-light text-gray-600">{node.frontmatter.date}</p>
                    </div>
                </div>
                )
            })}
            </div>
        </Layout>
      )
    }
  }

export default BlogIndex

export const pageQuery = graphql`
    query Blogs {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 140, truncate: true)
                    fields {
                        slug
                    }
                frontmatter {
                    date
                    title
                    }
                }
            }
        }
    }
`;