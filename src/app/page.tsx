'use client'

import PageContainer from '@/components/page-container'
import ProductList from '@/components/product-list'
import { ProductPaginationProvider } from '@/components/product-list/context'
import SearchArea from '@/components/search-area'
import { Suspense } from 'react'

export default function Home() {
  return (
    <PageContainer>
      <Suspense>
        <ProductPaginationProvider>
          <SearchArea />
          <ProductList />
        </ProductPaginationProvider>
      </Suspense>
    </PageContainer>
  )
}
