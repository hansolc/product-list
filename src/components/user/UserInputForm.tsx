import { UserProps } from '@/types/user'
import React from 'react'

interface UserInputFormProps {
  user: UserProps
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

const UserInputForm = ({ user, setUser }: UserInputFormProps) => {
  return (
    <>
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="password">password</label>
      <input
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
