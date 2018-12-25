import React from 'react'

import { Container, Logo } from './styles'
import Nav from '../Nav'
import Social from '../Social'
import Search from '../Search'
import { navLinkStyle } from '../Nav/styles'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Publications`, title: `Publications`, hitComp: `PublicationHit` },
]

const Header = ({ site, transparent }) => (
  <Container transparent={transparent}>
    <Logo to="/" title={site.title} rel="home">
      UR
    </Logo>
    <Nav />
    <Social collapse short linkStyle={navLinkStyle} />
    <Search collapse indices={searchIndices} />
  </Container>
)

export default Header
