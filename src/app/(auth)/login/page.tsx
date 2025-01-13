import React from 'react'
import PageContainer from '@/components/page-container'
import UserForm from '../components/UserForm'

const LoginPage = () => {
  return (
    <PageContainer>
      <UserForm type={'login'} />
    </PageContainer>
  )
}

export default LoginPage
