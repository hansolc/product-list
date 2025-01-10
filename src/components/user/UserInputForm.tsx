import { UserProps } from '@/types/user'
import React from 'react'
import Input from '../input/Input'

interface UserInputFormProps {
  user: UserProps
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

const UserInputForm = ({ user, setUser }: UserInputFormProps) => {
  return (
    <>
      <label htmlFor="username">username</label>
      <Input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="password">password</label>
      <Input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
    </>
  )
}

export default UserInputForm
