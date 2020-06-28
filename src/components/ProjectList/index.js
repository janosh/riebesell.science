import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import { Project } from './Project'
import { Modal, Thumbnail, LinkIcon } from './styles'
import { Grid } from '../styles'
import { useQueryParam } from 'hooks'

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

  const [urlProject, setUrlProject] = useQueryParam(`p`)
  const urlProjIdx = projects
    .map(p => p.frontmatter.title)
    .findIndex(title => title === urlProject)
  const [modal, setModal] = useState(urlProjIdx)

  const project = modal >= 0 && modal < projects.length && projects[modal]

  const setter = idx => {
    setUrlProject(projects[idx]?.frontmatter.title || null)
    setModal(idx)
  }
  return (
    <Grid gap="4em" {...props}>
      {projects.map(({ frontmatter: { title, banner, url } }, idx) => (
        <Thumbnail key={title} onClick={() => setter(idx)}>
          <Img {...banner.sharp} />
          <h2>{title}</h2>
          <LinkIcon href={url} />
        </Thumbnail>
      ))}
      <Modal open={project} modal={modal} setModal={setter}>
        <Project {...project.frontmatter} body={project.body} />
      </Modal>
    </Grid>
  )
}
