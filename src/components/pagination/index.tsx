import { PAGE_PER_PRODUCTS } from '@/constant/products'
import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { container, indexBox } from './Pagination.css'
import { useProductPaginationContext } from '../product-list/context'
import { PaginationProps } from '@/types/products'

const Pagination = ({ total }: PaginationProps) => {
  const { setPage } = useProductPaginationContext()
  const pages = Math.floor(total / PAGE_PER_PRODUCTS) + 1
  const idxArray = Array.from({ length: pages }, (_, idx) => idx + 1)

  return (
    <div className={container}>
      {idxArray.map((idx) => {
        return (
          <IndexBox key={`pagination_idx_${idx}`} onClick={() => setPage(idx)}>
            {idx}
          </IndexBox>
        )
      })}
    </div>
  )
}

const IndexBox = ({
  children,
  onClick,
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={indexBox} onClick={onClick}>
      {children}
    </div>
  )
}

export default Pagination
