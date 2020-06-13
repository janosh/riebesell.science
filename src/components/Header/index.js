import React from 'react'

import { HeaderDiv, Logo } from './styles'
import Nav from '../Nav'
import Search from '../Search'
import DarkToggle from '../DarkToggle'
import { Grid } from '../styles'
import { Wave } from 'components/Wave'

const searchIndices = [{ name: `Pages`, title: `Pages`, hitComp: `PageHit` }]

const Header = ({ site }) => (
  <>
    <HeaderDiv>
      <Logo to="/" title={site.title} rel="home">
        UR
      </Logo>
      <Nav />
      <Grid flow="column">
        <Search indices={searchIndices} size="1.1em" />
        <DarkToggle size="1.1em" />
      </Grid>
    </HeaderDiv>
    <Wave />
  </>
)

export default Header
