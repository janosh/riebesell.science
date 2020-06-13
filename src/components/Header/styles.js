import React from 'react'
import styled from 'styled-components'
import svg from 'assets/favicon.svg'
import { Link } from 'gatsby'

export const Logo = props => (
  <Link {...props}>
    <img src={svg} height="80" />
  </Link>
)

export const HeaderDiv = styled.header`
  display: grid;
  background: var(--color-blue-dark);
  color: white;
  grid-gap: 3vw;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 2vmin 3vmin 0;
  font-size: 1.3em;
`
