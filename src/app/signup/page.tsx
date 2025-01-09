'use client'

import PageContainer from '@/components/page-container'
import axios from 'axios'
import React, { useState } from 'react'
import useUser from '../hooks/useUser'
import UserInputForm from '@/components/user/UserInputForm'

const SignupPage = () => {
  const { user, setUser, signup } = useUser()
  return (
    <PageContainer>
      <div>
        <UserInputForm user={user} setUser={setUser} />
        <button onClick={signup}>Sign Up</button>
      </div>
    </PageContainer>
  )
}

export default SignupPage
