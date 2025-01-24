'use client'

import useObserve from '@/app/hooks/useObserve'
import { ProductListProps } from '@/schema/products'
import React, { useEffect, useRef } from 'react'
import useInfiniteProducts from '../hooks/useInfiniteProducts'
import ProductItem from './ProductListUI'
import Loader from '@/components/loader/Loader'

interface ProductsProps {
  initialData: ProductListProps
  product: string
}

const ProductList = ({ initialData, product }: ProductsProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProducts({ key: product, initialData: initialData })
  const { observe } = useObserve({ observedCallback: fetchNextPage })

  useEffect(() => {
    if (ref.current) {
      observe(ref.current)
    }
  }, [observe])
  console.log(data)

  return (
    <>
      <ProductItem data={data} />
      {hasNextPage && <div ref={ref}></div>}
      {isFetchingNextPage && <Loader msg="Serach For More Products!" />}
    </>
  )
}

export default ProductList
