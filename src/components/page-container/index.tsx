'use client'

import { PropsWithChildren } from 'react'
import { container } from './PageContainer.css'
import { ProductPaginationProvider } from '../product-list/context'

const PageContainer = ({ children }: PropsWithChildren) => {
  return <main className={container}>{children}</main>
}

export default PageContainer
