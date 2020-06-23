import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Div, Icons } from './styles'

export default function Social({ size = `1.5em` }) {
  const { social } = useStaticQuery(graphql`
    {
      social: allSocialYaml {
        nodes {
          title
          url
        }
      }
    }
  `)
  return (
    <Div>
      {social.nodes.map(({ title, url }) => {
        const Icon = Icons[title]
        if (!Icon) return null
        return (
          <a key={title} href={url} aria-label={title}>
            <Icon size={size} />
          </a>
        )
      })}
    </Div>
  )
}
