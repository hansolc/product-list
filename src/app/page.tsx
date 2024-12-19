import PageContainer from '@/components/page-container'
import ProductList from '@/components/product-list'
import SearchArea from '@/components/search-area'

export default function Home() {
  return (
    <PageContainer>
      <SearchArea />
      <ProductList />
    </PageContainer>
  )
}
