'use client'

import React from 'react'
import useProducts from './hooks/use-proudcts'

const ProductList = () => {
  const { data } = useProducts()
  return <section>product list</section>
}

export default ProductList
