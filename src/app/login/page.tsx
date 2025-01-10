'use client'
import React from 'react'
import useUser from '../hooks/useUser'
import UserInputForm from '@/components/user/UserInputForm'
import PageContainer from '@/components/page-container'
import { container } from './page.css'

const LoginPage = () => {
  const { user, setUser, login } = useUser()

  return (
    <PageContainer>
      <div className={container}>
        <h1>Log in</h1>
        <UserInputForm user={user} setUser={setUser} />
        <button onClick={login}>login</button>
      </div>
    </PageContainer>
  )
}

export default LoginPage
