'use client'
import React from 'react'
import useUser from '../hooks/useUser'
import UserInputForm from '@/components/user/UserInputForm'
import PageContainer from '@/components/page-container'
import { container } from './page.css'
import Button from '@/components/button/Button'

const LoginPage = () => {
  const { user, setUser, login } = useUser()

  return (
    <PageContainer>
      <div className={container}>
        <h1>Log in</h1>
        <UserInputForm user={user} setUser={setUser} />
        <Button onClick={login}>login</Button>
      </div>
    </PageContainer>
  )
}

export default LoginPage
