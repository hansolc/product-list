'use client'

import { userState } from '@/recoil/userAtom'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { container, header, list } from './Header.css'
import useLogout from '@/app/(auth)/hooks/useLogout'

const Header = () => {
  const userInfo = useRecoilValue(userState)
  const { logout } = useLogout()

  return (
    <header className={header}>
      <div className={container}>
        <p>{`Welcome ${userInfo?.username ?? 'Guest'}!`}</p>
        {userInfo && (
          <ul className={list}>
            <li onClick={logout}>logout</li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
