const query = `{
  allMdx {
    nodes {
      objectID: id
      frontmatter {
        title
        slug
      }
      excerpt(pruneLength: 5000)
    }
  }
}`

const flatten = arr =>
  arr.map(({ frontmatter, ...rest }) => ({ ...frontmatter, ...rest }))

const queries = [
  {
    query,
    transformer: res => flatten(res.data.allMdx.nodes),
    indexName: `Pages`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
