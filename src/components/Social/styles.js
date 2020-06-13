import styled from 'styled-components'
import { Email } from 'styled-icons/material'
import { LinkedinIn as LinkedIn } from 'styled-icons/fa-brands'
import { Researchgate } from 'styled-icons/fa-brands'
import { Google } from 'styled-icons/fa-brands'

export const Div = styled.div`
  color: var(--color-text);
  display: grid;
  justify-content: center;
  grid-area: social;
  grid-auto-flow: column;
  grid-gap: 1.5em;
  align-items: end;
  grid-auto-columns: max-content;
`

export const Icons = {
  Email: styled(Email)`
    vertical-align: -0.2em;
    transform: scale(1.1);
  `,
  LinkedIn,
  ResearchGate: Researchgate,
  GoogleScholar: styled(Google)`
    transform: scale(0.8);
  `,
}
