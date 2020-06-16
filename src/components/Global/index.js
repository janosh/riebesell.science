import { MDXProvider } from '@mdx-js/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Scroll'
import { H1 } from '../styles'
import Seo from '../Seo'
import { GlobalStyle, Main } from './styles'

export const Providers = ({ children }) => <MDXProvider>{children}</MDXProvider>

export function PageComponents({ children, pageContext, ...rest }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        site: siteMetadata {
          title
          url
          description
        }
      }
    }
  `)
  const { title, hideTitle } = pageContext?.frontmatter || {}
  return (
    <>
      <GlobalStyle />
      <Seo {...site} {...rest} {...pageContext} />
      <Header {...site} />
      {!hideTitle && <H1>{title}</H1>}
      <Main>{children}</Main>
      <Footer />
      <Scroll showBelow={1000} css="position: fixed; right: 1em; bottom: 1em;" />
    </>
  )
}
