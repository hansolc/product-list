'use client'

import { getProducts } from '@/actions/products'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await getProducts()
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
