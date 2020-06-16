import styled, { css } from 'styled-components'
import { mediaQueries } from 'utils/mediaQueries'

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;
  ${parent}:hover &,
  ${parent}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: ${p => p.gap || `1em`};
  grid-auto-flow: ${p => p.flow};
  grid-template-columns: ${p => p.templateCols};
  grid-template-rows: ${p => p.templateRows};
  grid-auto-columns: ${p => p.autoCols};
  grid-auto-rows: ${p => p.autoRows};
`

export const Portrait = styled.address`
  display: grid;
  font-style: normal;
  ${mediaQueries.maxPhablet} {
    text-align: center;
    justify-items: center;
  }
  ${mediaQueries.minPhablet} {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  grid-gap: 0 2em;
  margin-bottom: 4em;
  h1,
  h3 {
    margin-top: 1em;
  }
  h2 {
    margin: 0;
    font-weight: lighter;
  }
  > p:first-child {
    border-radius: 50%;
    overflow: hidden;
    width: 10em;
    height: 10em;
  }
`

export const H1 = styled.h1`
  width: max-content;
  padding: 0.3em 0.6em;
  margin: 1em auto 0.5em;
  font-size: 4em;
  position: relative;
  color: var(--color-green-light);
  border-bottom: 2px solid var(--color-orange-default);
`
