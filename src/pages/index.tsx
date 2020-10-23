import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PrivateRoute from '../components/PrivateRoute'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <PrivateRoute path="/login">
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Container>
      </PrivateRoute>
    </Page>
  </IndexLayout>
)

export default IndexPage
