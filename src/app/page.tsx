import PageContainer from '@/components/page-container'
import Pagination from '@/components/pagination'
import ProductList from '@/components/product-list'
import SearchArea from '@/components/search-area'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense>
      <PageContainer>
        <SearchArea />
        <ProductList />
      </PageContainer>
    </Suspense>
  )
}
