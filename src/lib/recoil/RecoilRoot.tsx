'use client'

import React, { PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'

const RecoilRootComponent = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilRootComponent
