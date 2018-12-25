import React from 'react'
import { Highlight } from 'react-instantsearch-dom'

const PublicationHit = clickHandler => ({ hit }) => (
  <div>
    <a href={hit.url} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </a>
    <Highlight attribute="abstract" hit={hit} tagName="mark" />
  </div>
)

export default PublicationHit
