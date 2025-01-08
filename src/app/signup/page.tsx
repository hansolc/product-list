'use client'

import PageContainer from '@/components/page-container'
import axios from 'axios'
import React, { useState } from 'react'

const SignupPage = () => {
  const [user, setUser] = useState({ username: '', password: '', email: '' })

  const onSignup = async () => {
    try {
      const res = axios.post('/api/users/signup', user)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      else console.log('something wrong!')
    }
  }
  return (
    <PageContainer>
      <div>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button onClick={onSignup}>Sign Up</button>
      </div>
    </PageContainer>
  )
}

export default SignupPage
