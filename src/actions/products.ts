import axios from 'axios'
import { ActionResult } from '@/types/actions'
import { ProductsResponse, productsResponseSchema } from '@/schema/products'
import { GetProductsProps } from '@/types/products'
import { handleError } from '@/lib/utils/error'

export const getProducts = async ({
  q,
  limit,
  skip,
}: GetProductsProps): Promise<ActionResult<ProductsResponse>> => {
  try {
    const response = await axios.get(
      `${process.env.SERVER_URL || 'http://localhost:3000'}/api/product`,
      {
        params: {
          q,
          limit,
          skip,
        },
      }
    )
    const { success, data } = productsResponseSchema.safeParse(response.data)

    if (success) {
      return {
        status: 'success',
        data: data,
      }
    } else {
      return {
        status: 'error',
        error: '데이터의 형식이 올바르지 않습니다.',
      }
    }
  } catch (error) {
    return handleError(error)
  }
}
