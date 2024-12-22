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
        <Image src={imageSrc} alt={'tumbnail'} width={300} height={300} />
      </div>
      <div className={cardTitle}>{title}</div>
      <div className={cardPrice}>$ {price}</div>
      <div className={cardDescription}>{description}</div>
    </div>
  )
}

export default Card
