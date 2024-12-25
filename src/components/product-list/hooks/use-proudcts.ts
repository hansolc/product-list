'use client'

import { getProducts } from '@/actions/products'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useProductPaginationContext } from '../context'
import { PAGE_PER_PRODUCTS } from '@/constant/products'

const useProducts = () => {
  const searchParams = useSearchParams()
  const { page } = useProductPaginationContext()

  const props = {
    q: searchParams.get('q') ?? '',
    skip: (page - 1) * PAGE_PER_PRODUCTS,
    limit: PAGE_PER_PRODUCTS,
  }
  // console.log(props)

  return useQuery({
    queryKey: ['products', { ...props }],
    queryFn: async () => {
      const res = await getProducts(props)
      if (res.status === 'error') {
        throw new Error(res.error)
      }
      return {
        ...res.data,
      }
    },
  })
}

export default useProducts
