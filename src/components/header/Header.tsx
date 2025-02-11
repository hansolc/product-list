'use client'

import { userState } from '@/recoil/userAtom'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { container, header, list } from './Header.css'
import useLogout from '@/app/(auth)/hooks/useLogout'
import Link from 'next/link'

const Header = () => {
  const userInfo = useRecoilValue(userState)
  const { logout } = useLogout()

  return (
    <header className={header}>
      <div className={container}>
        <p>{`Welcome ${userInfo?.username ?? 'Guest'}!`}</p>
        {
          <ul className={list}>
            {!userInfo ? (
              <li>
                <Link
                  href={'/login'}
                  style={{ color: 'darkgray', textDecoration: 'none' }}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li onClick={logout}>Logout</li>
            )}
          </ul>
        }
      </div>
    </header>
  )
}

export default Header
