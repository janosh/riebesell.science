import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Social from 'components/Social'
import { Wave } from 'components/Wave'
import { Github } from 'styled-icons/fa-brands'

import { FooterDiv } from './styles'

export default function Footer() {
  const { socialYaml, site } = useStaticQuery(graphql`
    {
      socialYaml(title: { eq: "GitHub" }) {
        url
      }
      site {
        meta: siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>
      <Wave flip />
      <FooterDiv>
        <span>
          © {new Date().getFullYear()} - {site.meta.author}
        </span>
        <Social />
        <a href={socialYaml.url}>
          <Github size="1.5em" css="vertical-align: -0.3em;" />
          &ensp;This site is open source
        </a>
      </FooterDiv>
    </>
  )
}
