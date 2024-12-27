import { PAGE_PER_PRODUCTS, PAGINATION_SIZE } from '@/constant/products'
import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { container, indexBox } from './Pagination.css'
import { useProductPaginationContext } from '../product-list/context'
import { PaginationProps } from '@/types/products'
import { getVisiblePaginationArray } from '@/lib/utils/products'

const Pagination = ({ total }: PaginationProps) => {
  const { setPage, page } = useProductPaginationContext()
  const pages = Math.floor(total / PAGE_PER_PRODUCTS) + 1

  return (
    <div className={container}>
      {getVisiblePaginationArray(pages, page).map((idx) => {
        return (
          <IndexBox
            key={`pagination_idx_${idx}`}
            onClick={() => setPage(idx)}
            isActive={page === idx}
          >
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
  isActive,
}: PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & { isActive: boolean }) => {
  return (
    <div
      className={isActive ? indexBox.active : indexBox.default}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Pagination
