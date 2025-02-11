import { z } from 'zod'

export const productListItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  discountPercentage: z.number(),
  thumbnail: z.string().url(),
  description: z.string(),
})

export const productsResponseSchema = z.object({
  products: z.array(productListItemSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
})

export type ProductsResponse = z.infer<typeof productsResponseSchema>
export type ProductListProps = ProductsResponse['products']
export type ProductListItemProps = z.infer<typeof productListItemSchema>
