import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '../styles'
import { Pub, TopIcon } from './styles'
import { People } from 'styled-icons/material'
import { Bookmarks } from 'styled-icons/boxicons-solid'
import { Calendar } from 'styled-icons/fa-solid'

export default function PublicationList() {
  const { pubs } = useStaticQuery(graphql`
    {
      pubs: allPublicationsCsv {
        totalCount
        nodes {
          Author
          Date
          Title
          Publication_Title
          Publisher
          Item_Type
        }
      }
    }
  `)
  return (
    <Grid
      templateCols="repeat(auto-fill, minmax(20em, 1fr))"
      gap="5em 1em"
      css="margin: 0 calc(2em - 10vw); 5em"
    >
      {pubs.nodes.map(pub => {
        let authors = pub.Author.split(`; `)
          .slice(0, 3)
          .map(name => name.split(`, `).reverse().join(` `))
          .join(`, `)
        const etAl = pub.Author.split(`; `).length > 3 ? ` et al.` : ``
        return (
          <Pub key={pub.Title}>
            <TopIcon isBook={pub.Item_Type.includes(`book`)} />
            <h3>{pub.Title}</h3>
            <strong>
              <People size="1.8em" css="margin: 0.5em 0.5em 0.5em 0;" />
              {authors + etAl}
            </strong>
            <div>
              <Calendar size="1.3em" css="margin: 0 0.5em 0 0;" />
              {pub.Date}
            </div>
            <div>
              <Bookmarks size="1.4em" css="margin: 0 0.5em 0 0;" />
              {pub.Publication_Title || pub.Publisher}
            </div>
          </Pub>
        )
      })}
    </Grid>
  )
}
