'use client'

import React, { FormEvent, useState } from 'react'
import { container, msg } from './UserForm.css'
import Button from '@/components/button/Button'
import Form from '@/components/form/Form'
import { UserProps } from '@/types/user'
import useLogin from '../hooks/useLogin'
import useSignup from '../hooks/useSignup'
import { isPasswordValid, isUsernameValid } from '@/lib/utils/auth'

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
        isValid={isUsernameValid(username)}
        invalidMsg={'숫자, 소문자 영문으로 4~8자리로 입력해주세요'}
      />
      <Form.Input
        label="password"
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={password}
        isValid={isPasswordValid(password)}
        invalidMsg={'숫자, 소/대문자 영문으로 8~20자리로 입력해주세요'}
      />
      <Button>{`${isLogin ? 'Log in' : 'Sign up'}`}</Button>
      {(isLoginError || isSignupError) && (
        <p className={msg}>
          {`Please try again - ${loginErrorMsg || signupErrorMsg}`}
        </p>
      )}
    </Form>
  )
}

export default UserForm
