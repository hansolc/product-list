import { ProductListItemProps, ProductListProps } from '@/schema/products'
import { InfiniteData } from '@tanstack/react-query'
import { container, descriptionContainer, image, title } from './Item.css'
import Image from 'next/image'

const ProductItem = ({ data }: { data: InfiniteData<ProductListProps> }) => {
  return (
    <>
      {data.pages
        .flatMap((d) => d)
        .map((product) => {
          return <Item key={product.id} productInfo={product} />
        })}
    </>
  )
}

const Item = ({ productInfo }: { productInfo: ProductListItemProps }) => {
  const {
    title: productTitle,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    tags,
    thumbnail,
  } = productInfo
  return (
    <div className={container}>
      <Image
        src={thumbnail}
        alt="temp"
        width={200}
        height={200}
        className={image}
      />
      <div className={descriptionContainer}>
        <div className={title}>{productTitle}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default ProductItem
