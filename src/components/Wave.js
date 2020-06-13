// Adapted from https://github.com/LekoArts/portfolio/blob/master/src/elements/Wave.jsx.
import React from 'react'
import styled, { keyframes } from 'styled-components'

const roll = keyframes`
  50% {
    d: path("M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z");
  }
  100% {
    d: path("M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z");
  }
`

const Svg = styled.svg`
  transform: ${p => p.flip && `scaleY(-1)`};
  height: 5em;
  fill: var(--color-blue-dark);
  margin-bottom: -1px; /* prevents tiny white space between Footer and Wave */
  path {
    animation: ${roll} 15s linear infinite alternate;
  }
`

export const Wave = props => (
  <Svg viewBox="0 0 54 14" preserveAspectRatio="none" {...props}>
    <path d="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" />
  </Svg>
)
