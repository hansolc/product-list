'use client'
import React from 'react'
import useUser from '../hooks/useUser'
import UserInputForm from '@/components/user/UserInputForm'

const LoginPage = () => {
  const { user, setUser, login } = useUser()

  return (
    <div>
      <UserInputForm user={user} setUser={setUser} />
      <button onClick={login}>login</button>
    </div>
  )
}

export default LoginPage
