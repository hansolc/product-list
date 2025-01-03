'use client'

import React from 'react'
import useProducts from './hooks/use-proudcts'
import GridContainer from '../grid-container'
import Card from './components/Card'
import Pagination from '../pagination'

const ProductListContainer = () => {
  return <ProductList />
}

const ProductList = () => {
  const { data, isLoading, isError, error } = useProducts()
  // console.log(data)
  if (!data || isLoading) return <div>... is loading</div>
  if (isError) return <div>{error.message}</div>

  return (
    <>
      <GridContainer>
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
