const path = require('path')

const pageTemplate = path.resolve('./src/templates/page.js')

const query = `
  {
    content: allMarkdownRemark {
      edges {
        node {
          path: fileAbsolutePath
          frontmatter {
            slug
          }
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(query)
  if (response.errors) {
    console.error(response.errors)
    throw new Error(response.errors)
  }
  response.data.content.edges.forEach(({ node: { path, frontmatter } }) => {
    const { slug } = frontmatter
    createPage({
      path: slug,
      component: pageTemplate,
      context: { slug },
    })
  })
}
