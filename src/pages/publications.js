import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"

const PublicationsPage = ({ location, data }) => (
  <Global path={location.pathname}>
    <PageTitle>
      <h1>Publications</h1>
    </PageTitle>
    {data.pubs.edges.map(({ node }) => (
      <div key={node.title}>
        <h3>
          <a href={node.url}>{node.title}</a>
        </h3>
        <p>{node.abstract}</p>
        <p>
          {node.preEtAl && <span>..., </span>}
          {node.authors.map((author, index) => (
            <span key={author.name}>
              {!!index && `, `}
              {author.url ? (
                <a href={author.url}>{author.name}</a>
              ) : (
                author.name
              )}
            </span>
          ))}
          {node.postEtAl && <span>, ...</span>}
        </p>
        <p>
          {node.pdfUrl && (
            <a href={node.pdfUrl} style={{ marginRight: `1em` }}>
              PDF
            </a>
          )}
          <span style={{ marginRight: `1em` }}>{node.year}</span>
          {node.journal && (
            <span style={{ marginRight: `1em` }}>{node.journal}</span>
          )}
          <a href={node.citedByUrl} style={{ marginRight: `1em` }}>
            Cited by {node.citedByCount}
          </a>
          <a href={node.relatedUrl} style={{ marginRight: `1em` }}>
            Related papers
          </a>
          {node.allVersionsUrl && (
            <a href={node.allVersionsUrl} style={{ marginRight: `1em` }}>
              All versions
            </a>
          )}
        </p>
      </div>
    ))}
  </Global>
)

export default PublicationsPage

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
  }
`
