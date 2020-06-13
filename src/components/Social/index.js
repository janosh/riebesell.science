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
      {social.nodes.map(service => {
        const Icon = Icons[service.title]
        if (!Icon) return null
        return (
          <a key={service.title} href={service.url}>
            <Icon size={size} />
          </a>
        )
      })}
    </Div>
  )
}
