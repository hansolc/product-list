'use client'

import { userState } from '@/recoil/userAtom'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { container, header, list } from './Header.css'
import PageContainer from '../page-container'

const Header = () => {
  const userInfo = useRecoilValue(userState)

  if (!userInfo) return null
  return (
    <header className={header}>
      <div className={container}>
        <p>{`Welcome ${userInfo.username} please search for product!`}</p>
        <ul className={list} style={{ display: 'none' }}>
          <li>logout</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
