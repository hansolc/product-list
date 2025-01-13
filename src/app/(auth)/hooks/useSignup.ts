import { UserProps } from '@/types/user'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const useSignup = ({ username, password }: UserProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async () =>
      await axios.post(`/api/users/signup`, { username, password }),

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverError =
          error.response?.data?.error || 'Unknown error occurred'
        setErrorMessage(serverError)
      } else {
        setErrorMessage('An unknown error occurred')
      }
    },
    onSuccess: () => {
      setErrorMessage(null)
      router.push('/login')
    },
  })

  return {
    ...mutation,
    errorMessage,
  }
}

export default useSignup
