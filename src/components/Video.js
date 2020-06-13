import React from 'react'
import styled from 'styled-components'

const IFrame = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Div = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin: 2em auto;
`

export function Embed(props) {
  const [key, id] = Object.entries(props)[0]
  const options = {
    youtube: {
      src: `https://www.youtube-nocookie.com/embed/${id}`,
      frameborder: `0`,
      allow: `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
      allowfullscreen: true,
    },
  }
  return (
    <Div>
      <IFrame {...options[key]} />
    </Div>
  )
}

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7;
`

export const BackgroundVideo = ({ src, ...rest }) => (
  <Video loop muted autoPlay {...rest}>
    <source src={src} type="video/mp4" />
  </Video>
)
