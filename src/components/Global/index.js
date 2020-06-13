import { MDXProvider } from '@mdx-js/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Scroll'
import Seo from '../Seo'
import { GlobalStyle, Main } from './styles'

export const Providers = ({ children }) => (
  <MDXProvider>
    {children}
    <Scroll showBelow={1500} css="position: fixed; right: 1em; bottom: 1em;" />
  </MDXProvider>
)

export function PageComponents({ children, ...rest }) {
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
  return (
    <>
      <GlobalStyle />
      <Seo {...site} {...rest} />
      <Header {...site} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
