import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { NavDiv, NavLink } from './styles'

export default function Nav(props) {
  const { nav } = useStaticQuery(graphql`
    {
      nav: allNavYaml {
        nodes {
          url
          title
        }
      }
    }
  `)
  return (
    <NavDiv {...props}>
      {nav.nodes.map(({ url, title }) => (
        <NavLink key={url} to={url} title={title}>
          {title}
        </NavLink>
      ))}
    </NavDiv>
  )
}
