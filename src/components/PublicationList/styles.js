import styled from 'styled-components'
import { BookBookmark } from 'styled-icons/boxicons-solid'
import { Newspaper } from 'styled-icons/fa-solid'

export const Pub = styled.article`
  position: relative;
  background: var(--color-accentBackground);
  padding: 1.5em;
  border-top: 5px solid var(--color-green-light);
  border-radius: 1em;
  display: grid;
  align-content: space-between;
  grid-gap: 1em;
`

export const TopIcon = styled(Newspaper).attrs(props => ({
  as: props.isBook && BookBookmark,
  size: `2em`,
}))`
  position: absolute;
  top: -2.5em;
  background: var(--color-green-light);
  padding: 1em;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`
