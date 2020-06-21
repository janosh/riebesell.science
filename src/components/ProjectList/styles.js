import React from 'react'
import RawModal from 'components/Modal'
import styled from 'styled-components'
import { Link } from 'styled-icons/boxicons-regular'

export const Thumbnail = styled.div`
  border-radius: 0.5em;
  overflow: hidden;
  display: grid;
  box-shadow: 0 0 1em var(--color-shadow);
  transition: 0.5s;
  position: relative;
  height: 25em;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  h2 {
    font-size: 2.4em;
    position: absolute;
    color: white;
    align-self: center;
    justify-self: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.4em 0.6em;
    text-align: center;
    border-radius: 0.5em;
    max-width: 70%;
  }
`

export const Modal = styled(RawModal)`
  padding: 1vw 3vw 0;
  max-width: 50em;
  &:after {
    content: '';
    display: block;
    height: 1em;
    width: 100%;
  }
`

export const Meta = styled.div`
  margin: 2em 0 1em;
  border-left: 0.2em solid var(--color-green-light);
`

export const Homepage = styled(Link)`
  width: 1.3em;
  margin: 0 0.3em 0 1em;
`

export const LinkIcon = styled.a.attrs({
  children: <Link size="1.2em" />,
  onClick: e => e.stopPropagation(), // prevent clicks from opening the modal
})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  color: white;
  width: 1.8em;
  height: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`
