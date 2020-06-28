const query = `{
  allMdx {
    nodes {
      objectID: id
      fileAbsolutePath
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

const processSlugs = arr =>
  arr.map(({ fileAbsolutePath: fap, ...rest }) =>
    fap.includes(`assets/projects`)
      ? { ...rest, slug: `/projects?p=${rest.title}` }
      : rest
  )

const queries = [
  {
    query,
    transformer: res => processSlugs(flatten(res.data.allMdx.nodes)),
    indexName: `Pages`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
