import { USER_NOT_LOGGED_IN } from '@/constant/auth'
import { handleError } from '@/lib/utils/error'
import { UserInfoResponse, userInfoSchema } from '@/schema/user'
import { ActionResult } from '@/types/actions'
import axios, { AxiosError } from 'axios'

export const getUser = async (): Promise<ActionResult<UserInfoResponse>> => {
  try {
    const response = await axios.get('/api/users/auth')

    const { success, data } = userInfoSchema.safeParse(response.data)

    if (success) {
      return {
        status: 'success',
        data: data,
      }
    } else {
      return {
        status: 'error',
        error: '데이터 형식이 올바르지 않습니다.',
      }
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      // user not logged in
      return {
        status: 'error',
        error: USER_NOT_LOGGED_IN,
      }
    }
    return handleError(error)
  }
}
