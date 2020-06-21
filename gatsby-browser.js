import { PageComponents, Providers } from 'components/Global'
import React from 'react'

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageComponents {...props}>{element}</PageComponents>
}

// https://gatsbyjs.org/docs/add-offline-support-with-a-service-worker
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This site has been updated. Reload to display the latest version?`
  )
  if (answer === true) window.location.reload()
}
