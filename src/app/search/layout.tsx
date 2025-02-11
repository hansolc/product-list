import PageContainer from '@/components/page-container'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import React, { PropsWithChildren } from 'react'

const SearchLayout = ({ children }: PropsWithChildren) => {
  return <PageContainer>{children}</PageContainer>
}

export default SearchLayout
