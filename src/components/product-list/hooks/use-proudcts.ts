'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get('/api/product')
      return {
        ...res.data,
      }
    },
  })
}

export default useProducts
