import styled from 'styled-components'

import mediaQuery from 'utils/mediaQuery'

export const FooterDiv = styled.footer`
  background: var(--color-blue-dark);
  padding: 2vh 5vw 5vh;
  color: white;
  a {
    color: var(--color-blue-lighter);
    :hover {
      color: var(--color-orange-default);
    }
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  ${mediaQuery.maxPhone} {
    flex-direction: column;
  }
`
