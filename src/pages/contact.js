import React from 'react'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import Social from '../components/Social'

const Contact = ({ location }) => {
  const path = location.pathname
  return (
    <Global path={path}>
      <PageTitle>
        <h1>Contact</h1>
      </PageTitle>
      <p>You can reach me by email or on any of these platforms.</p>
      <Social size="2em" />
      <p>
        I work at the{' '}
        <a href="https://www.geomar.de">
          Geomar Helmholtz Centre for Ocean Research
        </a>{' '}
        in Kiel.
      </p>
      <iframe
        title="contactMap"
        width="100%"
        height="600px"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDv0KmAmfpdDMTOrPRXU0DkpbHHFBzkVxk&q=Geomar,Kiel,Germany"
      />
    </Global>
  )
}

export default Contact
