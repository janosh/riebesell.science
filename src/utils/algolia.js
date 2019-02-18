const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
      frontmatter: {purpose: {eq: "page"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const publicationQuery = `{
  pubs: allGoogleScholar {
    edges {
      node {
        id
        title
        url
        authors {
          name
          url
        }
        preEtAl
        postEtAl
        abstract
        year
        journal
        pdfUrl
        citedByCount
        citedByUrl
        relatedUrl
        allVersionsUrl
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

module.exports = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: publicationQuery,
    transformer: ({ data }) => data.pubs.edges.map(({ node }) => node),
    indexName: `Publications`,
  },
]
