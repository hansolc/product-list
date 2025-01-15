import { userState } from '@/recoil/userAtom'
import { UserProps } from '@/types/user'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const useLogin = ({ username, password }: UserProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const setUserState = useSetRecoilState(userState)
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async () =>
      await axios.post(`/api/users/login`, { username, password }),
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverError =
          error.response?.data?.error || 'Unknown error occurred'
        setErrorMessage(serverError)
      } else {
        setErrorMessage('An unknown error occurred')
      }
    },
    onSuccess: (axiosResponse: AxiosResponse) => {
      setErrorMessage(null)
      setUserState(axiosResponse.data.userInfo)
      router.push('/')
    },
  })

  return {
    ...mutation,
    errorMessage,
  }
}

export default useLogin
