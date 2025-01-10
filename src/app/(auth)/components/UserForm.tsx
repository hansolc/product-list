'use client'

import React from 'react'
import useUser from '../../hooks/useUser'
import UserInputForm from '@/components/user/UserInputForm'
import PageContainer from '@/components/page-container'
import { container, title } from './UserForm.css'
import Button from '@/components/button/Button'

const UserForm = ({ type }: { type: 'login' | 'signup' }) => {
  const { user, setUser, login, signup } = useUser()

  const isLogin = type === 'login'
  const titleText = isLogin ? 'LOG IN' : 'SIGN UP'
  const handleAction = isLogin ? login : signup

  return (
    <PageContainer>
      <div className={container}>
        <h1 className={title}>{titleText}</h1>
        <UserInputForm user={user} setUser={setUser} />
        <Button onClick={handleAction} style={{ marginTop: '20px' }}>
          {type}
        </Button>
      </div>
    </PageContainer>
  )
}

export default UserForm
