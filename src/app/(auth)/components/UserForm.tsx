'use client'

import React, { FormEvent, useState } from 'react'
import { container, createAccount, msg } from './UserForm.css'
import Button from '@/components/button/Button'
import Form from '@/components/form/Form'
import { UserProps } from '@/types/user'
import useLogin from '../hooks/useLogin'
import useSignup from '../hooks/useSignup'
import { isPasswordValid, isUsernameValid } from '@/lib/utils/auth'
import Link from 'next/link'

interface UserFormProps {
  type: 'login' | 'signup'
}

const UserForm = ({ type }: UserFormProps) => {
  const [user, setUser] = useState<UserProps>({ username: '', password: '' })
  // error을 그대로 return 한다면 Axios Error가 return 되기 때문에
  // useLogin 훅 내부에서 string 형태로 처리 후 반환
  const {
    errorMessage: loginErrorMsg,
    mutate: login,
    isError: isLoginError,
  } = useLogin(user)
  const {
    errorMessage: signupErrorMsg,
    mutate: signup,
    isError: isSignupError,
  } = useSignup(user)
  const { username, password } = user
  const isLogin = type === 'login'
  const submitCondition =
    username !== '' &&
    password !== '' &&
    isUsernameValid(username) &&
    isPasswordValid(password)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLogin) {
      login()
    } else {
      signup()
    }
  }

  return (
    <Form className={container} onSubmit={handleSubmit}>
      <Form.Title>{`${isLogin ? 'Log in' : 'Sign up'}`}</Form.Title>
      <Form.Input
        label="username"
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        value={username}
        isValid={{
          condition: !isUsernameValid(username),
          msg: 'Please enter 4 to 8 characters using numbers and lowercase English letters.',
        }}
        color={!isUsernameValid(username) ? 'error' : 'default'}
      />
      <Form.Input
        label="password"
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={password}
        isValid={{
          condition: !isPasswordValid(password),
          msg: 'Please enter 8 to 20 characters using numbers and English letters (both uppercase and lowercase).',
        }}
        color={!isPasswordValid(password) ? 'error' : 'default'}
      />
      <Button
        disabled={!submitCondition}
      >{`${isLogin ? 'Log in' : 'Sign up'}`}</Button>
      {(isLoginError || isSignupError) && (
        <p className={msg}>
          {`Please try again - ${loginErrorMsg || signupErrorMsg}`}
        </p>
      )}
      {isLogin && (
        <Link href={'/signup'} className={createAccount}>
          Create account
        </Link>
      )}
    </Form>
  )
}

export default UserForm
