import { PageComponents, Providers } from 'components/Global'
import React from 'react'
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  MODE_COLORS,
} from 'utils/constants'
import { Helmet } from 'react-helmet'

function setColorsByTheme() {
  // Don't use backticks around emojis. Breaks replacement in boundFn below.
  // eslint-disable-next-line quotes
  const [colors, colorModeKey, colorModeCssProp] = ['🌈', '🔑', '⚡️']
  // Default value if the user never used DarkToggle is to use the OS color mode.
  let colorMode = `dark`

  // Only try to parse value from localStorage if there seems to be one.
  const persistedPreference =
    localStorage[colorModeKey] && JSON.parse(localStorage[colorModeKey])
  if ([`light`, `dark`, `auto`].includes(persistedPreference))
    colorMode = persistedPreference

  document.body.style.setProperty(colorModeCssProp, colorMode)

  // Here we set the actual colors for the page after SSR.
  // colorByMode only supports `dark` or `light`. So if colorMode
  // is `auto` we pick either of those depending on prefersDarkFromMQ.
  if (colorMode === `auto`) {
    const mq = window.matchMedia(`(prefers-color-scheme: dark)`)
    const prefersDarkFromMQ = mq.matches
    colorMode = prefersDarkFromMQ ? `dark` : `light`
  }

  for (const [name, colorByMode] of Object.entries(colors))
    document.body.style.setProperty(`--color-${name}`, colorByMode[colorMode])
}

function RssSetColorsByTheme() {
  const boundFn = String(setColorsByTheme)
    .replace(`'🌈'`, JSON.stringify(MODE_COLORS))
    .replace(`🔑`, COLOR_MODE_KEY)
    .replace(`⚡️`, INITIAL_COLOR_MODE_CSS_PROP)

  // Turn boundFn into an IIFE so it runs asap. Also avoids polluting global namespace.
  return <script dangerouslySetInnerHTML={{ __html: `(${boundFn})()` }} />
}

// If the user disabled JS, the injected script setColorsByTheme will
// never run and no colors will be set. Everything will be default
// black and white. By injecting a `<style>` tag into the head of the
// document, we can set default values for all of our colors. Only
// light mode will be available for users with JS disabled.
function FallbackStyles({ cssColors = `` }) {
  // Create a string holding each CSS variable:
  // `--color-text: black;\n--color-background: white;\n...`

  for (const [name, colorByMode] of Object.entries(MODE_COLORS))
    cssColors += `--color-${name}: ${colorByMode.light};\n`

  for (const [name, variants] of Object.entries(COLORS))
    for (const [variant, value] of Object.entries(variants))
      cssColors += `--color-${name}-${variant}: ${value};\n`

  const wrappedInSelector = `html { ${cssColors} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = actions => {
  // For dark mode.
  // Keys just to prevent warning: Each child in a list should have a unique "key" prop.
  actions.setHeadComponents(<FallbackStyles key="foo" />)
  actions.setPreBodyComponents(<RssSetColorsByTheme key="bar" />)

  // For SEO.
  const helmet = Helmet.renderStatic()
  actions.setHtmlAttributes(helmet.htmlAttributes.toComponent())
  actions.setBodyAttributes(helmet.bodyAttributes.toComponent())
  actions.setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
    helmet.base.toComponent(),
  ])
}

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageComponents {...props}>{element}</PageComponents>
}
