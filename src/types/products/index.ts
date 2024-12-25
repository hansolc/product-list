import { Dispatch, SetStateAction } from 'react'

// ================================= products
interface GetProductsProps {
  q: string
  limit: number
  skip: number
}

// ================================= pagination
interface ProductPaginationContextProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

interface PaginationProps {
  total: number
}

export type { GetProductsProps, ProductPaginationContextProps, PaginationProps }
