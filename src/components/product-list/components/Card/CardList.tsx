'use client'
import { ProductListProps } from '@/schema/products'
import { ObservedCard } from '.'
import { useEffect, useState } from 'react'

const CardList = ({ items }: { items: ProductListProps }) => {
  const [visibleItemsCount, setVisibleItemsCount] = useState(12)

  useEffect(() => {
    if (items.length) {
      setVisibleItemsCount(12)
    }
  }, [items])
  return (
    <>
      {items.slice(0, visibleItemsCount).map((d, idx) => {
        return (
          <ObservedCard
            key={`product_list_id_${d.id}`}
            imageSrc={d.thumbnail}
            title={d.title}
            price={d.price}
            description={d.description}
            isLastElement={visibleItemsCount === idx + 1}
            observedCallback={() => setVisibleItemsCount((prev) => prev + 4)}
          />
        )
      })}
    </>
  )
}

export default CardList
