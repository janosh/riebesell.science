import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavDiv = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 1em 0;
  }
  * + * {
    margin-left: calc(1em + 1vw);
  }
`

export const NavLink = styled(Link).attrs({
  activeClassName: `active`,
  partiallyActive: true,
})`
  color: inherit;
  transition: 0.3s;
  &.active {
    color: var(--color-a);
  }
  :hover {
    color: var(--color-blue-light);
  }
`
