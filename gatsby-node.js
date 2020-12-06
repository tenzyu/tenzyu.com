const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const { permalink } = node.frontmatter;
        const { relativePath } = getNode(node.parent);

        let slug = permalink;

        if (!slug) {
            slug = `/blog/${relativePath.replace(/(index)?\.mdx/, "")}`;
        }

        createNodeField({
          node,
          name: "slug",
          value: slug || "",
        });
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    
    return graphql(`
        {
            allMdx {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        // Create pages.
        result.data.allMdx.edges.forEach(({ node }) => {
            const { slug } = node.fields;
            createPage({
                path: slug,
                component: path.resolve(`./src/components/article.js`),
                context: {
                    slug,
                },
            })
        })
    })
}