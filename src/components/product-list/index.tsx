'use client'

import React, { PropsWithChildren } from 'react'
import useProducts from './hooks/use-proudcts'
import GridContainer from '../grid-container'
import Card from './components/Card'

const ProductList = () => {
  const { data, isLoading, isError } = useProducts()
  console.log(data)
  if (!data || isLoading) return <div>... is loading</div>
  if (isError) return <div>something went wrong</div>

  return (
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
  )
}

export default ProductList
