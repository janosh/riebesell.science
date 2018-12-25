import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'

const Contact = ({ location, data }) => (
  <Global path={location.pathname}>
    <PageTitle>
      <h1>Publications</h1>
    </PageTitle>
    {data.pubs.edges.map(({ node }) => (
      <div>
        <a href={node.url}>
          <h3>{node.title}</h3>
        </a>
        <p>{node.abstract}</p>
        {node.authors.map(({ name, url }) =>
          url ? <a href={url}>{name}</a> : name
        )}
      </div>
    ))}
  </Global>
)

export default Contact

export const query = graphql`
  {
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
          etAl
          abstract
          pdfUrl
          citedByCount
          citedByUrl
          relatedUrl
          allVersionsUrl
        }
      }
    }
  }
`
