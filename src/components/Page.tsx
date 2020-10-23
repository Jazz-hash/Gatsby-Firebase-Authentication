import * as React from 'react'
import styled from '@emotion/styled'
import { FirebaseContext } from '../../services'

import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`

interface PageProps {
  className?: string
}
const Page: React.FC<PageProps> = ({ children, className }) => {
  const { isInitialized } = React.useContext(FirebaseContext)
  console.log(`firebase instance is ${isInitialized ? 'initialized' : 'not initialized'}`)

  return <StyledPage className={className}>{children}</StyledPage>
}
export default Page
