import { getProducts } from '@/actions/products'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import ProductList from './components/ProductList'

interface ProductSearchedPageProps {
  params: {
    product: string
  }
}

export function generateMetadata({
  params,
}: ProductSearchedPageProps): Metadata {
  return {
    title: `${params.product} - Product Search`,
    description: `Find the best deals on ${params.product}`,
    openGraph: {
      title: `${params.product} - Product Search`,
      description: `Find the best deals on ${params.product}`,
    },
  }
}

const ProductSearchedPage = async ({ params }: ProductSearchedPageProps) => {
  const { product } = params
  const response = await getProducts({
    q: product,
    limit: 28,
    skip: 0,
  })
  if (response.status === 'error') {
    throw new Error(response.error)
  }
  const { products } = response.data
  if (products.length === 0) return 'there is no products'
  return <ProductList initialData={products} product={product} />
}

export default ProductSearchedPage
