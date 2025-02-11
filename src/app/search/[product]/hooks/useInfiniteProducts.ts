'use client'

import { getProducts } from '@/actions/products'
import { PAGE_PER_PRODUCTS } from '@/constant/products'
import { ProductListProps } from '@/schema/products'
import { useInfiniteQuery } from '@tanstack/react-query'

interface InfiniteProductsProps {
  key: string
  initialData: ProductListProps
}

const useInfiniteProducts = ({ key, initialData }: InfiniteProductsProps) => {
  return useInfiniteQuery({
    queryKey: ['products', key],
    queryFn: async ({ pageParam }) => {
      const res = await getProducts({
        q: key,
        limit: PAGE_PER_PRODUCTS,
        skip: pageParam,
      })
      if (res.status === 'error') throw new Error(res.error)
      return res.data.products
    },
    initialPageParam: 0, // 첫 번째 페이지 기본값
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === PAGE_PER_PRODUCTS
        ? pages.length * PAGE_PER_PRODUCTS
        : undefined
    },
    initialData: {
      pages: [initialData],
      pageParams: [0], // 첫 번째 요청의 pageParam 설정
    },
  })
}

export default useInfiniteProducts
