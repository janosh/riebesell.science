import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../assets/favicon.svg'

export default function Seo({ site, uri, children, frontmatter }) {
  let { title } = frontmatter || {}
  title = title ? `${title} | ${site.title}` : site.title
  const pageUrl = site.url + uri
  return (
    <Helmet title={title}>
      <meta property="og:type" content="website" />
      <html lang="en" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:description" content={site.description} />
      <meta name="description" content={site.description} />
      <link rel="canonical" href={pageUrl} />
      <link rel="icon" href={favicon} type="image/svg+xml" sizes="any" />
      {children}
    </Helmet>
  )
}
