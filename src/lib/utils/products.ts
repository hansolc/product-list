import { PAGE_PER_PRODUCTS, PAGINATION_SIZE } from '@/constant/products'

export const getVisiblePaginationArray = (
  totalPages: number,
  currentPage: number
) => {
  let startIdx = Math.max(currentPage - Math.floor(PAGINATION_SIZE / 2), 1)
  let endIdx = startIdx + PAGINATION_SIZE - 1

  if (endIdx > totalPages) {
    endIdx = totalPages
    startIdx = Math.max(1, endIdx - PAGINATION_SIZE + 1)
  }

  const visibleIdx = Array.from(
    { length: endIdx - startIdx + 1 },
    (_, idx) => startIdx + idx
  )

  return visibleIdx
}
