import { UserProps } from '@/types/user'
import axios from 'axios'
import React, { useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState<UserProps>({ username: '', password: '' })

  const login = async () => {
    try {
      const res = await axios.post(`/api/users/login`, user)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      else console.log('something wrong!')
    }
  }
  const signup = async () => {
    try {
      const res = await axios.post(`/api/users/signup`, user)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      else console.log('something wrong!')
    }
  }
  const logout = async () => {
    try {
      const res = await axios.post(`/api/users/logout`)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      else console.log('something wrong!')
    }
  }

  return {
    user,
    setUser,
    login,
    signup,
    logout,
  }
}

export default useUser
