'use client'

import { getProducts } from '@/actions/products'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const useProducts = () => {
  const searchParams = useSearchParams()

  const props = {
    q: searchParams.get('q') ?? '',
    skip: 0,
    limit: 28,
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
