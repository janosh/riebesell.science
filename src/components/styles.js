import styled, { css } from 'styled-components'

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
  grid-template-areas:
    'img text'
    'img text'
    'img text';
  align-content: start;
  grid-gap: 0 2em;
  margin-bottom: 5em;
  h2 {
    margin: 0;
    font-weight: lighter;
  }
  p:first-child {
    grid-area: img;
    margin: 0;
    border-radius: 50%;
    overflow: hidden;
  }
`
