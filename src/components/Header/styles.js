import React from 'react'
import styled from 'styled-components'
import svg from 'assets/favicon.svg'
import { Link } from 'gatsby'

export const Logo = props => (
  <Link {...props}>
    <img src={svg} alt="site logo" height="80" />
  </Link>
)

export const HeaderDiv = styled.header`
  display: grid;
  background: var(--color-blue-dark);
  color: white;
  grid-gap: 3vw;
  place-items: center;
  padding: 1em 1em 0;
  font-size: 1.2em;
`
