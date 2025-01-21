'use client'

import React, { Suspense } from 'react'
import useProducts from './hooks/use-proudcts'
import GridContainer from '../grid-container'
import Pagination from '../pagination'
import Loader from '../loader/Loader'
import CardList from './components/Card/CardList'

const ProductListContainer = () => {
  return (
    <Suspense>
      <ProductList />
    </Suspense>
  )
}

const ProductList = () => {
  const { data, isLoading, isError, error } = useProducts()

  if (!data || isLoading) return <Loader msg="Searching for products" />
  if (isError) return <div>{error.message}</div>

  return (
    <>
      <GridContainer
        column={{ desktop: 4, tablet: 2, mobile: 1 }}
        gap={{ col: 40, row: 40 }}
      >
        <CardList items={data.products} />
      </GridContainer>
      <Pagination total={data.total} />
    </>
  )
}

export default ProductListContainer
