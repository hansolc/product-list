import { PAGE_PER_PRODUCTS } from '@/constant/products'
import React, { PropsWithChildren } from 'react'
import { container, indexBox } from './Pagination.css'

interface PaginationProps {
  total: number
}

const Pagination = ({ total }: PaginationProps) => {
  const pages = Math.floor(total / PAGE_PER_PRODUCTS) + 1
  const idxArray = Array.from({ length: pages }, (_, idx) => idx + 1)

  return (
    <div className={container}>
      {idxArray.map((idx) => {
        return <IndexBox key={`pagination_idx_${idx}`}>{idx}</IndexBox>
      })}
    </div>
  )
}

const IndexBox = ({ children }: PropsWithChildren) => {
  return <div className={indexBox}>{children}</div>
}

export default Pagination
