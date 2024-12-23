'use client'

import React, { useEffect, useState } from 'react'
import { container, input } from './SearchArea.css'
import useSearchParamsByQ from './hooks/use-search-params-by-q'
import { useDebounce } from '@uidotdev/usehooks'

const SearchArea = () => {
  const { term, handleTermChange } = useSearchParamsByQ()
  const [searchProduct, setSearchProduct] = useState<string>(term)
  const debouncedSearchTerm = useDebounce(searchProduct, 300)

  useEffect(() => {
    handleTermChange(debouncedSearchTerm)
  }, [debouncedSearchTerm, handleTermChange])

  return (
    <div className={container}>
      <input
        type="text"
        className={input}
        placeholder="search here..."
        onChange={(e) => setSearchProduct(e.target.value)}
        value={searchProduct}
      />
    </div>
  )
}

export default SearchArea
