'use client'

import React, { PropsWithChildren, useEffect } from 'react'
import useFetchUser from './hooks/use-fetch-user'

const UserInitializer = ({ children }: PropsWithChildren) => {
  const { userInfo, fetchUserInfo } = useFetchUser()

  useEffect(() => {
    if (!userInfo) fetchUserInfo()
  }, [])

  return <>{children}</>
}

export default UserInitializer
