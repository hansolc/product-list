import axios from 'axios'
import { ActionResult } from '@/types/actions'
import { ProductsResponse, productsResponseSchema } from '@/schema/products'

export const getProducts = async ({
  q,
}: {
  q: string
}): Promise<ActionResult<ProductsResponse>> => {
  try {
    const response = await axios.get(`/api/product`, {
      params: {
        q,
      },
    })
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
    if (error instanceof Error) {
      return {
        status: 'error',
        error: error.message,
      }
    } else {
      return {
        status: 'error',
        error: '알 수 없는 오류가 발생했습니다',
      }
    }
  }
}
