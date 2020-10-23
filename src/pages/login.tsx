import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Login from '../components/Login'
const LoginPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Login />
      </Container>
    </Page>
  </IndexLayout>
)
export default LoginPage
