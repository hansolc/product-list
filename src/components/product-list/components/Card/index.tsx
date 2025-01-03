import React from 'react'
import {
  card,
  imageWrapper,
  cardTitle,
  cardPrice,
  cardDescription,
  image,
} from './Card.css'
import Image from 'next/image'
import Draggable from '@/components/draggable'

const Card = ({
  imageSrc,
  title,
  price,
  description,
}: {
  imageSrc: string
  title: string
  price: number
  description: string
}) => {
  return (
    <Draggable>
      <div className={card}>
        <div className={imageWrapper}>
          <Image
            src={imageSrc}
            alt={'tumbnail'}
            fill
            className={image}
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </div>
        <div className={cardTitle}>{title}</div>
        <div className={cardPrice}>$ {price}</div>
        <div className={cardDescription}>{description}</div>
      </div>
    </Draggable>
  )
}

export default Card
