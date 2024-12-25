import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface ProductPaginationContextProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

const ProductPaginationContext =
  createContext<ProductPaginationContextProps | null>(null)

export const ProductPaginationProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState(1)

  return (
    <ProductPaginationContext.Provider value={{ page, setPage }}>
      {children}
    </ProductPaginationContext.Provider>
  )
}

export const useProductPaginationContext = () => {
  const context = useContext(ProductPaginationContext)
  if (!context) {
    throw new Error(
      'useProductPaginationContext must be wrapped in a ProductPaginationProvider'
    )
  }
  return context
}
