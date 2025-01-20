import React, { forwardRef, useEffect, useRef } from 'react'
import {
  card,
  imageWrapper,
  cardTitle,
  cardPrice,
  cardDescription,
  image,
} from './Card.css'
import Image from 'next/image'
import useObserve from '@/app/hooks/useObserve'

interface CardProps {
  imageSrc: string
  title: string
  price: number
  description: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ imageSrc, title, price, description }, ref) => {
    return (
      <div className={card} ref={ref}>
        <div className={imageWrapper}>
          <Image
            src={imageSrc}
            alt={'thumbnail'}
            className={image}
            fill
            sizes="(max-width: 749px) 100vw, (max-width:1279px) 50vw, 25vw"
          />
        </div>
        <div className={cardTitle}>{title}</div>
        <div className={cardPrice}>$ {price}</div>
        <div className={cardDescription}>{description}</div>
      </div>
    )
  }
)

Card.displayName = 'Card'

const ObservedCard = ({
  isLastElement,
  observedCallback,
  ...rest
}: CardProps & { isLastElement: boolean; observedCallback: () => void }) => {
  const { observe } = useObserve({ observedCallback })
  const cardRef = useRef(null)

  useEffect(() => {
    if (isLastElement && cardRef.current) {
      observe(cardRef.current)
    }
  }, [isLastElement, observe])

  return <Card {...rest} ref={cardRef} />
}

export { Card, ObservedCard }
