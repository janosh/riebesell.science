import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import { Project } from './Project'
import { Modal, Thumbnail, LinkIcon } from './styles'
import { Grid } from '../styles'

export function ProjectList(props) {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/assets/projects/" } }) {
        projects: nodes {
          body
          frontmatter {
            title
            url
            logo {
              src: dataURI
            }
            banner {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const { projects } = allMdx
  const [modal, setModal] = useState()
  const project = modal >= 0 && modal < projects.length && projects[modal]
  return (
    <Grid gap="4em" {...props}>
      {projects.map(({ frontmatter: { title, banner, url } }, idx) => (
        <Thumbnail key={title} onClick={() => setModal(idx)}>
          <Img {...banner.sharp} />
          <h2>{title}</h2>
          <LinkIcon href={url} />
        </Thumbnail>
      ))}
      <Modal open={project} {...{ modal, setModal }}>
        <Project {...project.frontmatter} body={project.body} />
      </Modal>
    </Grid>
  )
}
