import React from 'react'
import PageContainer from '@/components/page-container'
import UserForm from '../components/UserForm'

const SignupPage = () => {
  return (
    <PageContainer>
      <UserForm type={'signup'} />
    </PageContainer>
  )
}

export default SignupPage
