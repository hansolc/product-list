'use client'

import React, { Suspense } from 'react'
import useProducts from './hooks/use-proudcts'
import GridContainer from '../grid-container'
import Card from './components/Card'
import Pagination from '../pagination'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recoil/userAtom'
import Loader from '../loader/Loader'

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
        {data.products.map((d, idx) => {
          return (
            <Card
              key={`product_list_id_${d.id}`}
              imageSrc={d.thumbnail}
              title={d.title}
              price={d.price}
              description={d.description}
            />
          )
        })}
      </GridContainer>
      <Pagination total={data.total} />
    </>
  )
}

export default ProductListContainer
