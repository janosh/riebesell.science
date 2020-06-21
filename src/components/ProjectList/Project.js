import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Homepage, Meta } from './styles'
import Img from 'gatsby-image'

export const Project = ({ title, url, body, banner, logo }) => (
  <>
    <a href={url} css="width: 40%; margin: 5em auto;">
      <img {...logo} alt={title} />
    </a>
    <Img {...banner.sharp} alt={title} />
    <Meta>
      <Homepage />
      <a href={url}>{title} Homepage</a>
    </Meta>
    <MDXRenderer>{body}</MDXRenderer>
  </>
)
