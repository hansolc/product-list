'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })

  const onLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', user)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('Login failed', error.message)
    } finally {
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <hr />

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
      <button onClick={onLogin}>login</button>
    </div>
  )
}
