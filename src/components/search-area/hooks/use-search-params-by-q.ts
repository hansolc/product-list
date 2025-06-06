'use client'

import { useProductPaginationContext } from '@/components/product-list/context'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

const useSearchParamsByQ = () => {
  const router = useRouter()
  const serachParams = useSearchParams()
  const [term, setTerm] = useState(serachParams.get('q') ?? '')
  const { setPage } = useProductPaginationContext()

  const handleTermChange = useCallback((inputValue: string) => {
    setPage(1)
    setTerm(inputValue)

    const searchParams = new URLSearchParams(window.location.search)
    if (inputValue) {
      searchParams.set('q', inputValue)
    } else {
      searchParams.delete('q')
    }
    router.push(`?${searchParams.toString()}`)
  }, [])

  return {
    term,
    handleTermChange,
  }
}

export default useSearchParamsByQ
