import React from 'react'
import {
  card,
  imageWrapper,
  cardTitle,
  cardPrice,
  cardDescription,
} from './Card.css'
import Image from 'next/image'

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
    <div className={card}>
      <div className={imageWrapper}>
        <Image
          src={imageSrc}
          alt={'tumbnail'}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={cardTitle}>{title}</div>
      <div className={cardPrice}>$ {price}</div>
      <div className={cardDescription}>{description}</div>
    </div>
  )
}

export default Card
